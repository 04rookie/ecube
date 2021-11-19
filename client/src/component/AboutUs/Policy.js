import React from "react";
import { TitleStyle, BodyStyle } from "../GlobalStyle/GlobalStyle";
import PolicyData from "./PolicyData";
export default function Policy() {
  return (
    <>
      <h1 style={{ ...TitleStyle, padding: "0vw 25vw 0vw" }}>
        E-cube consultants Management is committed to
      </h1>
      <ul style={{listStyleType:"none", padding:"0vw 0vw 5vw"}}>
          {PolicyData.map((point)=>{
              return <li style={{padding:".5vw 25vw"}}><i style={{paddingRight:"2vw"}} class="fas fa-pencil-ruler"></i><span style={BodyStyle}>{point}</span></li>
          })}
      </ul>
    </>
  );
}
