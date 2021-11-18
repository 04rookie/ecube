import React from "react";
import { Box } from "@mui/material";
import man from "./header-man.png"
export default function Header() {
  return (
    <div name="home-header-main">
      <Box sx={{padding:"3vw", height:"26.9vw", backgroundColor:"#BBE1FA"}}>
        <p style={{ fontSize:"3vw", fontFamily: "Montserrat", fontWeight: 700, color:"#1B262C" }}>E-cube</p>
        <img style={{ position:"relative", right:"14vw", width:"15vw", display:"block"}} src={man} alt="pic" align="right"></img>
      </Box>
    </div>
  );
}
