import React, { useState } from "react";
import { Grid, Paper, TextField, Box, Button } from "@mui/material";
import axios from "axios";
import AuthHeader from "../Auth/Auth";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Viewport } from "../GlobalStyle/GlobalStyle";
export default function Mod() {
  const viewport = Viewport(600);
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
    addUserId: "",
    docUrl: "",
    reportId: "",
  });
  function handleChange(e) {
    setUserEntry((prev) => {
      const temp = { ...prev };
      return { ...prev, [e.target.name]: e.target.value };
    });
  }

  function handleSubmit(e) {
    e.target.name === "userEntry" ? postUserServer() : postUserDocumentServer();
  }

  async function postUserServer() {
    const userId = localStorage.getItem("userId");
    const response = await axios.post(
      "/api/user/" + userId,
      { access: userId, data: userEntry },
      { headers: AuthHeader() }
    );
    if (!response.data) {
      setError(true);
      setHelperText("User id is not unique, try a different ID");
    } else {
      setError(false);
      setHelperText("");
      return response;
    }
  }

  async function postUserDocumentServer() {
    const userId = localStorage.getItem("userId");
    const response = await axios.post(
      "/api/report/" + userId,
      {
        access: userId,
        data: {
          userId: userEntry.addUserId,
          docUrl: userEntry.docUrl,
          docType: select,
          reportId: userEntry.reportId
        },
      },
      { headers: AuthHeader() }
    );
  }

  const [select, setSelect] = React.useState("");

  const handleSelectChange = (event) => {
    setSelect(event.target.value);
  };

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
                name="addUserId"
                label="User ID"
                variant="standard"
                sx={{ marginBottom: "1vw" }}
                onChange={handleChange}
                value={userEntry.addUserId}
                autoComplete="off"
              ></TextField>
              <TextField
                error={error}
                helperText={helperText}
                name="docUrl"
                label="Document URL"
                variant="standard"
                sx={{ marginBottom: "1vw" }}
                onChange={handleChange}
                value={userEntry.docUrl}
                autoComplete="off"
              ></TextField>
              <TextField
                error={error}
                helperText={helperText}
                name="reportId"
                label="Report ID"
                variant="standard"
                sx={{ marginBottom: "1vw" }}
                onChange={handleChange}
                value={userEntry.reportId}
                autoComplete="off"
              ></TextField>
              <FormControl
                sx={{
                  m: 1,
                  minWidth: "15vw",
                  marginTop: viewport ? "0vw" : "5vw",
                }}
              >
                <InputLabel sx={{ width: "auto" }}>Type</InputLabel>
                <Select
                  value={select}
                  onChange={handleSelectChange}
                  autoWidth
                  label="Select"
                >
                  <MenuItem value={1}>Mechanical</MenuItem>
                  <MenuItem value={2}>Chemical</MenuItem>
                  <MenuItem value={3}>NDT</MenuItem>
                  <MenuItem value={4}>Structural Audit</MenuItem>
                </Select>
              </FormControl>
              <Button
                sx={{ marginTop: viewport ? ".5vw" : "5vw" }}
                variant="contained"
                name="userDocumentEntry"
                onClick={handleSubmit}
              >
                Add document
              </Button>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
