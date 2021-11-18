import React from "react";
import { Box, Grid } from "@mui/material";
import man from "./header-man.png";
export default function Header() {
  return (
    <div name="home-header-main">
      <Box
        sx={{ padding: "3vw", height: "17.3vw", backgroundColor: "#BBE1FA" }}
      >
        <Grid container>
        <Grid item xs={6} sm={6}>
          <p
            style={{
              fontSize: "3vw",
              fontFamily: "Montserrat",
              fontWeight: 700,
              color: "#1B262C",
            }}
          >
            E-cube
          </p>
          </Grid>
          <Grid item xs={6} sm={6}>
          <img
            style={{
              position: "relative",
              right: "14vw",
              width: "15vw",
              display: "block",
            }}
            src={man}
            alt="pic"
            align="right"
          ></img>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
