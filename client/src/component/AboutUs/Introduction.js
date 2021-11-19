import React from "react";
import { paragraphOne, paragraphTwo } from "./IntroData";
export default function Introduction() {
  return (
    <>
      <h1>Introduction</h1> <p>{paragraphOne + " " + paragraphTwo}</p>
    </>
  );
}
