const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
app.use(express.json());
require("dotenv").config();
app.use(express.static(path.join(__dirname, "/app")));
const port = 5000;
const jwt = require("jsonwebtoken");
const auth = require("./Middleware/auth");
const authGET = require("./Middleware/authGET");
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
  userName: String,
  companyName: String,
  companyAddress: String,
  companyGstNumber: String,
  companyAuthorisedPerson: String,
  companyMobileNumber: String,
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
        console.log(err);
      } else if (foundUser) {
        const token = jwt.sign(
          { userId: foundUser.userId },
          process.env.USER_TOKEN_KEY,
          { expiresIn: "72h" }
        );
        res.send({
          token: token,
          success: true,
          isMod: false,
          userId: foundUser.userId,
        });
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
              res.send({
                token: token,
                success: true,
                isMod: true,
                userId: foundMod.userId,
              });
            } else {
              res.send({
                token: null,
                success: false,
                isMod: false,
                userId: null,
              });
            }
          }
        );
      }
    }
  );
});

app.post("/api/user/:userId", auth, (req, res) => {
  const userId = req.params.userId;
  const data = req.body.data;
  try {
    User.findOne({ userId: req.body.data.userId }, (err, foundUser) => {
      if (err) {
        throw "error";
      } else if (foundUser) {
        res.send(false);
      } else {
        const newUserDoc = new User({
          ...data,
        });
        newUserDoc.save().then(()=>res.send(true));
      }
    });
  } catch (err) {
    console.log("Exception in /api/user/userId");
    console.log(err);
    res.send(false);
  }
});

app.get("/api/user/:userId", authGET, (req, res)=>{
  User.findOne({userId: req.params.userId}, (err, foundUser)=>{
    if(err){
      console.log(err)
      console.log("error in app.get user/userId")
    }
    else if(foundUser){
      delete foundUser.userPassword;
      res.send(foundUser)
    }
    else {
      res.send(false)
    }
  })
})

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/app", "/index.html"), (err) => {
    if (err) {
      console.log(err);
    }
  });
});
