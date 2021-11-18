import React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
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

  function pushServicesPage(){
      navigate("/services")
  }

  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Tabs value={value} onChange={handleChange} aria-label="nav tabs">
          <LinkTab label="Home" onClick={pushHomePage} />
          <LinkTab label="About Us" onClick={pushAboutUsPage} />
          <LinkTab label="Services" onClick={pushServicesPage} />
        </Tabs>
      </Box>
    </>
  );
}

export default Navbar;
