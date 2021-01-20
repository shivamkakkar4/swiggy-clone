const bcrypt = require("bcryptjs");


module.exports.hashPassword = async (password) => {
    try {
      const salt = await bcrypt.genSalt(10); // 10 rounds
      return await bcrypt.hash(password, salt);
    } catch (error) {
      throw new Error("Hashing failed", error);
    }
  };
  
  module.exports.comparePasswords = async (inputPassword, hashedPassword) => {
    try {
      return await bcrypt.compare(inputPassword, hashedPassword);
    } catch (error) {
      throw new Error("Comparison failed", error);
    }
  };