import React from "react";
import { Box, Container } from "@mui/material";
export default function Footer() {
  return (
    <div style={{textAlign:"center"}}>
      <Box
        sx={{padding: "3vw", backgroundColor: "#1B262C", color: "#BBE1FA"}}>
        <p style={{ display: "inline", fontFamily:"montserrat", fontSize:".6vw" }}>Copyright e-cube consultants 2020</p>
      </Box>
    </div>
  );
}
