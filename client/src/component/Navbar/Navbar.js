import React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import { createTheme, ThemeProvider } from "@mui/material/styles";
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
      secondary:{ main: "#BBE1FA"}
    },
  });

  return (
    <>
    <ThemeProvider theme={theme}>
      <Box sx={{ width: "100%", backgroundColor: "#1B262C", color:"#BBE1FA", paddingLeft:"3vw" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="nav tabs"
          textColor="secondary"
          indicatorColor="secondary"
        >
          <LinkTab style={{color:"#BBE1FA", fontWeight:"700"}} label="Home" onClick={pushHomePage} />
          <LinkTab style={{color:"#BBE1FA", fontWeight:"700"}} label="About Us" onClick={pushAboutUsPage} />
          <LinkTab style={{color:"#BBE1FA", fontWeight:"700"}} label="Services" onClick={pushServicesPage} />
        </Tabs>
      </Box>
      </ThemeProvider>
    </>
  );
}

export default Navbar;
