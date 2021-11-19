import React from "react";
import { Box, Grid } from "@mui/material";
import man from "./header-man.png";
import { Viewport, TitleStyle, BodyStyle } from "../GlobalStyle/GlobalStyle";
export default function Header() {
  const viewport = Viewport();
  return (
    <div name="home-header-main">
      <Box
        sx={{ padding: "3vw",marginBottom:viewport?"0vw":"10vw", height:viewport?"17.3vw":"37.5vw", backgroundColor: "#BBE1FA" }}
      >
        <Grid container>
        <Grid item xs={6} sm={6}>
          <h1
            style={{
              fontSize: viewport?"3vw":"7vw",
              fontFamily: "Montserrat",
              fontWeight: 700,
              color: "#1B262C",
            }}
          >
            E-cube
          </h1>
          </Grid>
          <Grid item xs={6} sm={6}>
          <img
            style={{
              position: "relative",
              right:viewport?"14vw":"14vw",
              width: viewport?"15vw":"30vw",
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
