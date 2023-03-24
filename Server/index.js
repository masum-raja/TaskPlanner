const express = require("express");
const cors = require("cors");
require("dotenv").config();

const {connection} = require("./config/db")
const {signUp} = require("./routes/signup.route")
const {signIn} = require("./routes/signin.route")
const {auth}=require("./middleware/auth")

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);

app.get("/", (req, res) => {
  res.send("Welcome to home page");
});
app.use("/signup", signUp);
app.use("/login", signIn);
app.use(auth);

app.listen(process.env.port, async () => {
  try {
    await connection;
    console.log({ message: "DB Connection Successfully" });
  } catch (err) {
    console.log(err);
    console.log({ message: "DB Connection Fail" });
  }

  console.log({ message: `listning on port ${process.env.port}` });
});
