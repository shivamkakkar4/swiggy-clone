const Joi = require("joi");
require("dotenv").config();
const { v4: uuid } = require("uuid");

const { sendEmail } = require("./helpers/mailer");
const { generateJwt } = require("./helpers/generateJWT");
const { sendSMS } = require("./helpers/sms");
const { customAlphabet: generate } = require("nanoid");
const User = require("./schema/User");
const { hashPassword, comparePasswords } = require("./helpers/extras");

//Validate user schema
const userSchema = Joi.object().keys({
  name: Joi.string(),
  email: Joi.string().email({ minDomainSegments: 2 }),
  password: Joi.string().required().min(6),
  confirmPassword: Joi.string().valid(Joi.ref("password")).required(),
  phoneNumber: Joi.string().required(),
  referrer: Joi.string(),
});

const CHARACTER_SET =
  "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

const REFERRAL_CODE_LENGTH = 8;

const referralCode = generate(CHARACTER_SET, REFERRAL_CODE_LENGTH);

exports.Signup = async (req, res) => {
  try {
    console.log("working")
    const result = userSchema.validate(req.body);
    if (result.error) {
      console.log(result.error.message);
      return res.json({
        error: true,
        status: 400,
        message: result.error.message,
      });
    }

    //Check if the Phone number has been already registered.
    var userPhone = await User.findOne({
      phoneNumber: result.value.phoneNumber,
    });
    if (userPhone) {
      return res.json({
        error: true,
        message: "Phone Number is already in use",
      });
    }

    //Check if the email has been already registered.
    var user = await User.findOne({
      email: result.value.email,
    });

    if (user) {
      return res.json({
        error: true,
        message: "Email is already in use",
      });
    }

    let code = Math.floor(100000 + Math.random() * 900000); //Generate random 6 digit code.
    let expiry = Date.now() + 60 * 1000 * 10;

    const sendCode = await sendEmail(result.value.email, code);

    if (sendCode.error) {
      return res.status(500).json({
        error: true,
        message: "Couldn't send verification email.",
      });
    }

    const sendSms = await sendSMS(result.value.phoneNumber, code);

    if (sendSms.error) {
      return res.status(500).json({
        error: true,
        message: "Couldn't send sms.",
      });
    }
    
    // result.value.emailToken = code;
    // result.value.emailTokenExpires = new Date(expiry);

    //Check if referred and validate code.
    if (result.value.hasOwnProperty()) {
      let referrer = await User.findOne({
        referralCode: result.value.referrer,
      });
      if (!referrer) {
        return res.status(400).send({
          error: true,
          message: "Invalid referral code.",
        });
      }
    }

    return res.status(200).json({
      success: true,
      message: "Registration Success",
      code: code,
      codeExpires: new Date(expiry),
      referralCode: result.value.referralCode,
    });
  } catch (error) {
    console.error("signup-error", error);
    return res.status(500).json({
      error: true,
      message: "Cannot Register",
    });
  }
};

exports.Activate = async (req, res) => {
  try {
    const { email, code } = req.body;
    
    result.value.referralCode = referralCode(); //Generate referral code for the new user.

    const newUser = new User(result.value);
    await newUser.save();
  } catch (error) {
    console.error("activation-error", error);
    return res.status(500).json({
      error: true,
      message: error.message,
    });
  }
};

exports.Login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        error: true,
        message: "Cannot authorize user.",
      });
    }

    //1. Find if any account with that email exists in DB
    const user = await User.findOne({ email: email });

    // NOT FOUND - Throw error
    if (!user) {
      return res.status(404).json({
        error: true,
        message: "Account not found",
      });
    }

    //2. Throw error if account is not activated
    if (!user.active) {
      return res.status(400).json({
        error: true,
        message: "You must verify your email to activate your account",
      });
    }

    //3. Verify the password is valid
    const isValid = await comparePasswords(password, user.password);

    if (!isValid) {
      return res.status(400).json({
        error: true,
        message: "Invalid credentials",
      });
    }

    //Generate Access token
    const { error, token } = await generateJwt(user.email, user.userId);
    if (error) {
      return res.status(500).json({
        error: true,
        message: "Couldn't create access token. Please try again later",
      });
    }
    user.accessToken = token;

    await user.save();

    //Success
    return res.send({
      success: true,
      message: "User logged in successfully",
      accessToken: user.accessToken,
    });
  } catch (err) {
    console.error("Login error", err);
    return res.status(500).json({
      error: true,
      message: "Couldn't login. Please try again later.",
    });
  }
};

exports.LoginWithOTP = async (req, res) => {
  try {
    const { phoneNumber } = req.body;
    if (!phoneNumber) {
      return res.json({
        error: true,
        status: 400,
        message: "cannot authorize user",
      });
    }
    const user = await User.findOne({
      phoneNumber: phoneNumber,
    });

    if (!user) {
      return res.json({
        error: true,
        message: "Account not found",
      });
    }

    if (!user.activated) {
      return res.status(400).json({
        error: true,
        message: "You must verify your email to activate your account",
      });
    }

    let code = Math.floor(100000 + Math.random() * 900000); //Generate random 6 digit code.
    let expiry = Date.now() + 60 * 1000 * 10;

    const sendSms = await sendSMS(phoneNumber, code);

    if (sendSms.error) {
      return res.status(500).json({
        error: true,
        message: "Couldn't send sms.",
      });
    }

    user.loginOTP = code;
    user.loginOTPExpires = new Date(expiry);

    await user.save();

    return res.send({
      success: true,
      message: "OTP send successfully and activated for next 10 mins",
    });
  } catch (err) {
    console.error("LoginWithOTP error", err);
    return res.status(500).json({
      error: true,
      message: "Couldn't login. Please try again later.",
    });
  }
};

exports.CheckOTP = async (req, res) => {
  try {
    const { phoneNumber, otp } = req.body;
    if (!phoneNumber || !otp) {
      return res.json({
        error: true,
        status: 400,
        message: "Please make a valid request",
      });
    }

    const user = await User.findOne({
      phoneNumber: phoneNumber,
      loginOTP: otp,
      loginOTPExpires: { $gt: Date.now() },
    });

    if (!user) {
      return res.status(400).json({
        error: true,
        message: "Invalid Details",
      });
    }

    const { error, token } = await generateJwt(user.email, user.userId);
    if (error) {
      return res.status(500).json({
        error: true,
        message: "Couldn't create access token. Please try again later",
      });
    }
    user.accessToken = token;

    user.loginOTP = "";
    user.loginOTPExpires = null;

    await user.save();

    return res.send({
      success: true,
      message: "User logged in successfully",
      accessToken: user.accessToken,
    });
  } catch (err) {
    console.error("CheckOTP error", err);
    return res.status(500).json({
      error: true,
      message: "Couldn't login. Please try again later.",
    });
  }
};

exports.ForgotPassword = async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) {
      return res.send({
        status: 400,
        error: true,
        message: "Cannot be processed",
      });
    }
    const user = await User.findOne({
      email: email,
    });
    if (!user) {
      return res.send({
        success: true,
        message:
          "If that email address is in our database, we will send you an email to reset your password",
      });
    }

    let code = Math.floor(100000 + Math.random() * 900000);
    let response = await sendEmail(user.email, code);

    if (response.error) {
      return res.status(500).json({
        error: true,
        message: "Couldn't send mail. Please try again later.",
      });
    }

    let expiry = Date.now() + 60 * 1000 * 15;
    user.resetPasswordToken = code;
    user.resetPasswordExpires = expiry; // 15 minutes

    await user.save();

    return res.send({
      success: true,
      message:
        "If that email address is in our database, we will send you an email to reset your password",
    });
  } catch (error) {
    console.error("forgot-password-error", error);
    return res.status(500).json({
      error: true,
      message: error.message,
    });
  }
};

exports.ResetPassword = async (req, res) => {
  try {
    const { token, newPassword, confirmPassword } = req.body;
    if (!token || !newPassword || !confirmPassword) {
      return res.status(403).json({
        error: true,
        message:
          "Couldn't process request. Please provide all mandatory fields",
      });
    }
    const user = await User.findOne({
      resetPasswordToken: req.body.token,
      resetPasswordExpires: { $gt: Date.now() },
    });
    if (!user) {
      return res.send({
        error: true,
        message: "Password reset token is invalid or has expired.",
      });
    }
    if (newPassword !== confirmPassword) {
      return res.status(400).json({
        error: true,
        message: "Passwords didn't match",
      });
    }
    const hash = await User.hashPassword(req.body.newPassword);
    user.password = hash;
    user.resetPasswordToken = null;
    user.resetPasswordExpires = "";

    await user.save();

    return res.send({
      success: true,
      message: "Password has been changed",
    });
  } catch (error) {
    console.error("reset-password-error", error);
    return res.status(500).json({
      error: true,
      message: error.message,
    });
  }
};

exports.ReferredAccounts = async (req, res) => {
  try {
    const { referralCode } = req.decoded; //Destruction syntax

    const referredAccounts = await User.find(
      { referrer: referralCode },
      { email: 1, referralCode: 1, _id: 0 }
    );
    return res.send({
      success: true,
      accounts: referredAccounts,
      total: referredAccounts.length,
    });
  } catch (error) {
    console.error("fetch-referred-error", error);
    return res.stat(500).json({
      error: true,
      message: error.message,
    });
  }
};

exports.Logout = async (req, res) => {
  try {
    const { id } = req.decoded;

    let user = await User.findOne({ userId: id });

    user.accessToken = "";

    await user.save();

    return res.send({ success: true, message: "User Logged out" });
  } catch (error) {
    console.error("user-logout-error", error);
    return res.stat(500).json({
      error: true,
      message: error.message,
    });
  }
};
