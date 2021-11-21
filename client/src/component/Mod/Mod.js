import React, { useState } from "react";
import { Grid, Paper, TextField, Box, Button } from "@mui/material";
import axios from "axios";
import AuthHeader from "../Auth/Auth";
export default function Mod() {
  const [error, setError] = useState(false);
  const [helperText, setHelperText] = useState("");
  const [userEntry, setUserEntry] = useState({
    userId: "",
    userPassword: "",
    userName: "",
    companyName: "",
    companyAddress: "",
    companyGstNumber: "",
    companyAuthorisedPerson: "",
    companyMobileNumber: "",
  });
  function handleChange(e) {
    setUserEntry((prev) => {
      const temp = { ...prev };
      return { ...prev, [e.target.name]: e.target.value };
    });
  }

  function handleSubmit(e) {
    e.target.name === "userEntry" ? postUserServer() : postUserServer();
  }

  async function postUserServer() {
    const userId = localStorage.getItem("userId");
    const response = await axios.post(
      "/api/user/" + userId,
      { access:userId, data:userEntry},
      { headers: AuthHeader()}
    );
    if(!response.data){
      setError(true)
      setHelperText("User id is not unique, try a different ID")
    }
    else{
      setError(false)
      setHelperText("")
      return response
    }
  }
  return (
    <div>
      <Grid container>
        <Grid item sm={6} xs={12}>
          <Paper
            sx={{ width: "100%", height: "100vh", bgcolor: "#BBE1FA" }}
            square
          >
            <Box
              sx={{
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
            <TextField
                error={error}
                helperText={helperText}
                name="userId"
                label="User ID"
                variant="standard"
                sx={{ marginBottom: "1vw" }}
                onChange={handleChange}
                value={userEntry.userId}
                autoComplete="off"
              ></TextField>
              <TextField
                error={error}
                helperText={helperText}
                name="userPassword"
                label="User Password"
                variant="standard"
                sx={{ marginBottom: "1vw" }}
                onChange={handleChange}
                value={userEntry.userPassword}
                autoComplete="off"
              ></TextField>
              <TextField
                error={error}
                helperText={helperText}
                name="userName"
                label="User name"
                variant="standard"
                sx={{ marginBottom: "1vw" }}
                onChange={handleChange}
                value={userEntry.userName}
                autoComplete="off"
              ></TextField>
              <TextField
                error={error}
                helperText={helperText}
                name="companyName"
                label="Company name"
                variant="standard"
                sx={{ marginBottom: "1vw" }}
                onChange={handleChange}
                value={userEntry.companyName}
                autoComplete="off"
              ></TextField>
              <TextField
                error={error}
                helperText={helperText}
                name="companyAddress"
                label="Company address"
                variant="standard"
                sx={{ marginBottom: "1vw" }}
                onChange={handleChange}
                value={userEntry.companyAddress}
                multiline
                autoComplete="off"
              ></TextField>
              <TextField
                error={error}
                helperText={helperText}
                name="companyGstNumber"
                label="GST no."
                variant="standard"
                sx={{ marginBottom: "1vw" }}
                onChange={handleChange}
                value={userEntry.companyGstNumber}
                autoComplete="off"
                multiline
              ></TextField>
              <TextField
                error={error}
                helperText={helperText}
                name="companyMobileNumber"
                label="Company mobile no."
                variant="standard"
                sx={{ marginBottom: "1vw" }}
                onChange={handleChange}
                value={userEntry.companyMobileNumber}
                autoComplete="off"
              ></TextField>
              <Button
                variant="contained"
                name="userEntry"
                onClick={handleSubmit}
              >
                Add user
              </Button>
            </Box>
          </Paper>
        </Grid>
        <Grid item sm={6} xs={12}>
          <Paper
            sx={{ width: "100%", height: "100vh", bgcolor: "#FDFDFD" }}
            square
          ></Paper>
        </Grid>
      </Grid>
    </div>
  );
}
