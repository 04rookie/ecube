import React, { useEffect, useState } from "react";
import { paragraphOne, paragraphTwo } from "./IntroData";
import { TitleStyle, BodyStyle, Viewport } from "../GlobalStyle/GlobalStyle";
export default function Introduction() {
  const viewport = Viewport(800);
  return (
    <>
      <h1
        style={{
          ...TitleStyle,
          padding: viewport ? "5vw 25vw 0vw" : "5vw 5vw 0vw",
        }}
      >
        About us
      </h1>
      <p
        style={{
          ...BodyStyle,
          padding: viewport ? "0vw 25vw 5vw" : "0vw 5vw 5vw",
        }}
      >
        {paragraphOne + " " + paragraphTwo}
      </p>
    </>
  );
}
