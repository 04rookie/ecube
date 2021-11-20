import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import AboutUs from "./AboutUs/AboutUs";
import Footer from "./Footer/Footer";
import Home from "./Home/Home";
import Navbar from "./Navbar/Navbar";
import { Services } from "./Services/Services";
import Login from "./Login/Login";
import Mod from "./Mod/Mod";
function App() {
  const [login, setLogin] = React.useState(false);

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("userId"));
    console.log(token)
    if (token) {
      setLogin(true)
    }
    else{
      setLogin(false)
    }
  }, []);

  return (
    <>
      <Navbar login={login} setLogin={setLogin} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/login" element={<Login setLogin={setLogin} />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
