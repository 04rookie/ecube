import React from "react";
import { paragraphOne, paragraphTwo } from "./IntroData";
import { TitleStyle, BodyStyle } from "../GlobalStyle/GlobalStyle";
export default function Introduction() {
  return (
    <>
      <h1 style={{...TitleStyle, padding:"5vw 25vw 0vw"}}>About us</h1> <p style={{...BodyStyle, padding:"0vw 25vw 5vw"}}>{paragraphOne + " " + paragraphTwo}</p>
    </>
  );
}
