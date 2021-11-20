const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
app.use(express.json());
require("dotenv").config();
app.use(express.static(path.join(__dirname, "/app")));
const port = 5000;
const jwt = require("jsonwebtoken");
app.listen(process.env.PORT || port, () => {
  console.log("server started.");
});

mongoose.connect(process.env.MONGO_DB_URL_KEY, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const userSchema = new mongoose.Schema({
  userId: String,
  userPassword: String,
});
const User = mongoose.model("User", userSchema);

const modSchema = new mongoose.Schema({
  userId: String,
  userPassword: String,
});
const Mod = mongoose.model("Mod", modSchema);

app.post("/api/login", (req, res) => {
  User.findOne(
    { userId: req.body.userId, userPassword: req.body.userPassword },
    (err, foundUser) => {
      if (err) {
        console.log(error);
      } else if (foundUser) {
        const token = jwt.sign(
          { userId: foundUser.userId },
          process.env.USER_TOKEN_KEY,
          { expiresIn: "72h" }
        );
        res.send({ token: token, success: true, isMod: false });
      } else {
        Mod.findOne(
          { userId: req.body.userId, userPassword: req.body.userPassword },
          (err, foundMod) => {
            if (err) {
              console.log(error);
            } else if (foundMod) {
              const token = jwt.sign(
                { userId: foundMod.userId },
                process.env.USER_TOKEN_KEY,
                { expiresIn: "72h" }
              );
              res.send({ token: token, success: true, isMod: true });
            } else {
              res.send({ token: null, success: false, isMod: false });
            }
          }
        );
      }
    }
  );
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/app", "/index.html"), (err) => {
    if (err) {
      console.log(err);
    }
  });
});
