const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
app.use(express.json());
require("dotenv").config();
app.use(express.static(path.join(__dirname, "/app")))
const port = 5000;
app.listen(process.env.PORT || port, () => {
  console.log("server started.");
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/app", "/index.html"), (err) => {
    if (err) {
      console.log(err);
    }
  });
});
