const express = require("express");
const router = express.Router();
const cleanBody = require("../middlewares/cleanbody");
const { validateToken } = require("../middlewares/validateToken")
const AuthController = require("../controller");
router.post("/signup", cleanBody, AuthController.Signup);
router.post("/login", cleanBody, AuthController.Login);
router.post("/activate", cleanBody, AuthController.Activate);
router.patch("/forgot", cleanBody, AuthController.ForgotPassword);
router.patch("/reset", cleanBody, AuthController.ResetPassword);
router.post("/loginOTP",cleanBody, AuthController.LoginWithOTP);
router.patch("/checkOTP",cleanBody, AuthController.CheckOTP);
router.get("/referred", validateToken, AuthController.ReferredAccounts);
router.get("/logout", validateToken, AuthController.Logout);
module.exports = router;
