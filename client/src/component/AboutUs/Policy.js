import React, { useEffect, useState } from "react";
import { TitleStyle, BodyStyle, Viewport } from "../GlobalStyle/GlobalStyle";
import PolicyData from "./PolicyData";
import { Grid } from "@mui/material";
export default function Policy() {
  const viewport = Viewport(800);
  return (
    <>
      <h1
        style={{
          ...TitleStyle,
          padding: viewport? "0vw 25vw 0vw" : "0vw 5vw 0vw",
        }}
      >
        E-cube consultants Management is committed to
      </h1>
      <ul
        style={{
          listStyleType: "none",
          padding: viewport? "0vw 0vw 5vw" : "0vw 0vw 5vw",
        }}
      >
        {PolicyData.map((point) => {
          return (
            <li style={{padding:viewport?"0.5vw 25vw":"0.5vw 5vw"}}>
              <Grid container>
                <Grid item xs={1}>
                  <i
                    style={{ paddingRight: "2vw" }}
                    class="fas fa-pencil-ruler"
                  ></i>
                </Grid>
                <Grid item xs={11}>
                  <span style={BodyStyle}>{point}</span>
                </Grid>
              </Grid>
            </li>
          );
        })}
      </ul>
    </>
  );
}
