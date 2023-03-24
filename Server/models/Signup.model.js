const mongoose = require("mongoose");

const signUpSchema = mongoose.Schema({
  email: String,
  password: String,
});

const SignUpModel = mongoose.model("auth", signUpSchema);

module.exports = { SignUpModel };
