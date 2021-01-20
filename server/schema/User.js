const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const userSchema = new Schema(
  {
    userId: { type: String, unique: true, required: true },
    email: { type: String, required: true, unique: true },
    actived: { type: Boolean, default: false },
    password: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    resetPasswordToken: { type: String, default: null },
    resetPasswordExpires: { type: Date, default: null },
    emailToken: { type: String, default: null },
    emailTokenExpires: { type: Date, default: null },
    accessToken: { type: String, default: null },
    referralCode: { type: String, unique: true },
    referrer: { type: String, default: null },
  },
  {
    timestamps: {
      createdAt: "createdAt",
      updatedAt: "updatedAt",
    },
  }
);
const User = mongoose.model("user", userSchema);
module.exports = User;


