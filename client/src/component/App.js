import React from "react";
import { Route, Routes } from "react-router-dom";
import AboutUs from "./AboutUs/AboutUs";
import Home from "./Home/Home"
import Navbar from "./Navbar/Navbar"
import { Services } from "./Services/Services";
function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/home" element={<Home/>} />
      <Route path="/about-us" element={<AboutUs/>}/>
      <Route path="/services" element={<Services/>}/>
    </Routes> </>
  );
}

export default App;
