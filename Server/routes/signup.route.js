const { Router } = require("express");
const bcrypt = require("bcrypt");

const { SignUpModel } = require("../models/Signup.model");

const signUp = Router();

signUp.post("/", async (req, res) => {
  const { email, password } = req.body;
  const userPresent = await SignUpModel.findOne({ email });
  if (userPresent) {
    res.status(400).send({ message: "User already exist" });
  } else {
    try {
      bcrypt.hash(password, 5, async (err, hash) => {
        const user = new SignUpModel({
          email,
          password: hash,
        });
        await user.save();
        res.status(200).send({ message: "User created successfully" });
      });
    } catch (err) {
      console.log(err);
      res.status(400).send({ message: "Something went wrong" });
    }
  }
});

module.exports = { signUp };
