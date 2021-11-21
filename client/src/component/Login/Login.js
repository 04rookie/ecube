import React, { useState } from "react";
import { Box, Paper, TextField, Button } from "@mui/material";
import { TitleStyle, BodyStyle, Viewport } from "../GlobalStyle/GlobalStyle";
import { maxHeight } from "@mui/system";
import { useNavigate } from "react-router";
const axios = require("axios");
export default function Login(props) {
  const viewport = Viewport(1000);
  const [userId, setUserId] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [error, setError] = useState(false)
  const [helperText, setHelperText] = useState("")
  const navigate = useNavigate();
  function handleChange(e) {
    e.target.id === "userId"
      ? setUserId(e.target.value)
      : setUserPassword(e.target.value);
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
    if(response.data.success){
      props.setLogin(true)
      localStorage.setItem("userToken", JSON.stringify(response.data.token))
      localStorage.setItem("userId", response.data.userId)
      response.data.isMod?navigate("/mod/dashboard"):navigate("/dashboard/" + response.data.userId);
    }
    else{
      setError(true)
      setHelperText("Incorrect id or password")
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
            // width: viewport ? "20vw" : "70vw",
            // height: viewport ? "20vw" : "70vw",
            // maxWidth: viewport ? "20vw" : "50vw",
            // maxHeight: viewport ? "20vw" : "50vw",
            // minWidth: viewport ? "20vw" : "40vw",
            // minHeight: viewport ? "20vw" : "40vw",
            padding: viewport ? "6vw" : "12vw",
            bgcolor: "#BBE1FA",
            borderRadius: "1vw",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <h1 style={{ ...TitleStyle }}>Login</h1>
          <TextField
            error={error}
            helperText={helperText}
            id="userId"
            label="User ID"
            variant="standard"
            sx={{ marginBottom: "1vw" }}
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
            sx={{ marginBottom: "1vw" }}
          ></TextField>
          <Button variant="contained" onClick={handleSubmit}>
            Submit
          </Button>
        </Box>
      </Paper>
    </div>
  );
}