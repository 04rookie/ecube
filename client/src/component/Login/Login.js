import React, { useState } from "react";
import { Box, Paper, TextField, Button } from "@mui/material";
import { TitleStyle, BodyStyle, Viewport } from "../GlobalStyle/GlobalStyle";
import { fontSize, maxHeight } from "@mui/system";
import { useNavigate } from "react-router";
const axios = require("axios");
export default function Login(props) {
  const viewport = Viewport(1000);
  const [userId, setUserId] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [error, setError] = useState(false);
  const [helperText, setHelperText] = useState("");
  const navigate = useNavigate();
  function handleChange(e) {
    const pattern = /[^a-zA-Z0-9]/;
    //console.log(pattern.test(e.target.value))
    if (e.target.id === "userId") {
      if (!pattern.test(e.target.value)) {
        setUserId(e.target.value);
        setError(false);
        setHelperText("");
      } else {
        setError(true);
        setHelperText("Alphanumeric only");
      }
    } else {
      if (pattern.test(e.target.value)) {
        setUserPassword(e.target.value);
        setError(false);
        setHelperText("");
      } else {
        setError(true);
        setHelperText("Alphanumeric only");
      }
    }
  }

  function handleSubmit() {
    //do validations!
    postLogin();
  }

  async function postLogin() {
    const response = await axios.post(
      "/api/login",
      { userId: userId, userPassword: userPassword },
      { headers: { "Content-Type": "application/json" } }
    );
    if (response.data.success) {
      props.setLogin(true);
      localStorage.setItem("userToken", JSON.stringify(response.data.token));
      localStorage.setItem("userId", response.data.userId);
      response.data.isMod
        ? navigate("/mod/dashboard")
        : navigate("/dashboard/" + response.data.userId);
    } else {
      setError(true);
      setHelperText("Incorrect id or password");
    }
  }

  return (
    <div>
      <Paper
        sx={{
          height: "97vh",
          width: "100%",
          bgcolor: "#3282B8",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        square
      >
        <Box
          sx={{
            padding: viewport ? "6vw" : "12vw",
            bgcolor: "#BBE1FA",
            borderRadius: "1vw",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <h1 style={{ ...TitleStyle, fontSize: viewport ? "1.5vw" : "4vw" }}>
            Login
          </h1>
          <TextField
            error={error}
            helperText={helperText}
            id="userId"
            label="User ID"
            variant="standard"
            sx={{ marginBottom: "1vw", maxWidth: viewport ? "20vw" : "26vw" }}
            onChange={handleChange}
            value={userId}
            autoComplete="off"
          ></TextField>
          <TextField
            error={error}
            helperText={helperText}
            id="password"
            label="Password"
            type="password"
            variant="standard"
            onChange={handleChange}
            value={userPassword}
            sx={{ marginBottom: "1vw", maxWidth: viewport ? "20vw" : "26vw" }}
          ></TextField>
          <Button variant="contained" onClick={handleSubmit}>
            Submit
          </Button>
        </Box>
      </Paper>
    </div>
  );
}
