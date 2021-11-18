import React, { useEffect } from "react";
import Header from "./Header";
import Features from "./Features";
import Testimonials from "./Testimonials";
function Home() {
  useEffect(() => {}, []);
  return (
    <div name="home-div-main">
        <Header/>
        <Features />
        <Testimonials />
    </div>
  );
}

export default Home;
