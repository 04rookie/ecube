import React from "react";
import { TitleStyle, BodyStyle, Viewport } from "../GlobalStyle/GlobalStyle";

import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

export default function Reports() {
  const viewport = Viewport(600);
  return (
    <div style={{ padding: "3vw" }}>
      {/* {viewport ? <ReportHeadBar /> : <ReportFootBar />} */}
      <NavTabs />
    </div>
  );
}

// function ReportHeadBar() {
//   return <NavTabs />;
// }

// function ReportFootBar() {
//   return <div>there</div>;
// }

function NavTabs() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function handleClick() {}
  const tabNames = [
    { value: "1", label: "Mechanical" },
    { value: "2", label: "Chemical" },
    { value: "3", label: "NDT" },
    { value: "4", label: "Structural Audit" },
  ];
  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            {tabNames.map((tab) => {
              return (
                <Tab key={tab.value} label={tab.label} value={tab.value}></Tab>
              );
            })}
          </TabList>
        </Box>
        {tabNames.map((tab) => {
          return <TabPanel value={tab.value}>{tab.label}</TabPanel>;
        })}
      </TabContext>
    </Box>
  );
}
