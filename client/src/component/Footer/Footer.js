import React from "react";
import { Box, Container } from "@mui/material";
import { Viewport, BodyStyle} from "../GlobalStyle/GlobalStyle";
export default function Footer() {
  const viewport = Viewport(800);
  return (
    <div style={{textAlign:"center"}}>
      <Box
        sx={{padding: viewport?"3vw":"15vw", backgroundColor: "#1B262C", color: "#BBE1FA"}}>
        <p style={{ ...BodyStyle }}>Copyright e-cube consultants 2020</p>
      </Box>
    </div>
  );
}
