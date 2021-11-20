import React, { useState } from "react";
import { Box, Paper, TextField } from "@mui/material";
import { TitleStyle, BodyStyle, Viewport } from "../GlobalStyle/GlobalStyle";
import { maxHeight } from "@mui/system";
export default function Mod() {
  const viewport = Viewport(1000);
  const [userId, setUserId] = useState("");
  const [userPassword, setUserPassword] = useState("");

  function handleChange(e) {
    console.log(e.target.id);
    console.log(e.target.value);
    console.log(userId);
    e.target.id === "userId"
      ? setUserId(e.target.value)
      : setUserPassword(e.target.value);
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
            padding:viewport?"6vw":"12vw",
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
            id="userId"
            label="User ID"
            variant="standard"
            sx={{ marginBottom: "1vw" }}
            onChange={handleChange}
            value={userId}
          ></TextField>
          <TextField
            id="password"
            label="Password"
            type="password"
            variant="standard"
            onChange={handleChange}
            value={userPassword}
          ></TextField>
        </Box>
      </Paper>
    </div>
  );
}
