import React, { useEffect, useState } from "react";
import { Grid, Paper } from "@mui/material";
import axios from "axios";
import Auth from "../Auth/Auth";
import { BodyStyle, TitleStyle, Viewport } from "../GlobalStyle/GlobalStyle";
import Reports from "./Reports";
export default function Dashboard() {
  const viewport = Viewport(800)
  const [userData, setUserData] = useState({
    userId: "",
    userName: "",
    companyName: "",
    companyAddress: "",
    companyGstNumber: "",
    companyAuthorisedPerson: "",
    companyMobileNumber: "",
  });
  useEffect(() => {
    getUser().then((response) => {
      setUserData((prev) => {
        const temp = { ...response.data };
        return temp;
      });
    });
  }, []);

  async function getUser() {
    const response = await axios.get(
      "/api/user/" + localStorage.getItem("userId"),
      { headers: Auth() }
    );
    return response;
  }
  return (
    <div>
      <Grid container>
        <Grid item sm={4} xs={12}>
          <Paper
            sx={{
              width: "100%",
              height: "100vh",
              bgcolor: "#BBE1FA",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
            square
          >
            <div>
            <i style={{fontSize:viewport?"5vw":"10vw"}} class="fas fa-user-circle"></i>
              <h3 style={{ ...TitleStyle }}>Name: {userData.userName}</h3>
              <h3 style={{ ...TitleStyle }}>
                Company Name: {userData.companyName}
              </h3>
              <h3 style={{ ...TitleStyle }}>
                Company Address: {userData.companyAddress}
              </h3>
              <h3 style={{ ...TitleStyle }}>
                Company GST: {userData.companyGstNumber}
              </h3>
              <h3 style={{ ...TitleStyle }}>
                Company Authorized Personnel: {userData.companyAuthorisedPerson}
              </h3>
              <h3 style={{ ...TitleStyle }}>
                Company Mobile Number: {userData.companyMobileNumber}
              </h3>
            </div>
          </Paper>
        </Grid>
        <Grid item sm={8} xs={12}>
          <Paper
            sx={{ width: "100%", height: "100vh", bgcolor: "#FDFDFD" }}
            square
          ><Reports /></Paper>
        </Grid>
      </Grid>
    </div>
  );
}
