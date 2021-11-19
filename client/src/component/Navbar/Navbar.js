import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import logo from "./logo.jpg";
import { Viewport } from "../GlobalStyle/GlobalStyle";
function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

function Navbar() {
  const navigate = useNavigate();
  const [value, setValue] = React.useState(0);
  const [top, setTop] = React.useState(true);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function pushHomePage() {
    navigate("/home");
  }

  function pushAboutUsPage() {
    navigate("/about-us");
  }

  function pushServicesPage() {
    navigate("/services");
  }

  const theme = createTheme({
    palette: {
      primary: { main: "#1B262C" },
      secondary: { main: "#BBE1FA" },
    },
  });

  const linkTabStyle = { color: "#BBE1FA", fontWeight: "700" };

  const viewport = Viewport();
  return (
    <>
      <ThemeProvider theme={theme}>
        <Box
          sx={{
            width: "100%",
            backgroundColor: "#1B262C",
            color: "#BBE1FA",
            position: "sticky",
            top: "0vw",
            zIndex: "1",
          }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="nav tabs"
            textColor="secondary"
            indicatorColor="secondary"
          >
            {/* <img
              alt="logo"
              src={logo}
              style={{ width: viewport ? "3vw" : "10vw" }}
            ></img> */}
            <LinkTab style={linkTabStyle} label="Home" onClick={pushHomePage} />
            <LinkTab
              style={linkTabStyle}
              label="About Us"
              onClick={pushAboutUsPage}
            />
            <LinkTab
              style={linkTabStyle}
              label="Services"
              onClick={pushServicesPage}
            />
          </Tabs>
        </Box>
      </ThemeProvider>
    </>
  );
}

export default Navbar;
