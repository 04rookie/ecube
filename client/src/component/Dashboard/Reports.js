import React from "react";
import { TitleStyle, BodyStyle, Viewport } from "../GlobalStyle/GlobalStyle";

import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { Button, Paper } from "@mui/material";

export default function Reports(props) {
  const viewport = Viewport(600);
  return (
    <div style={{ padding: "3vw" }}>
      {/* {viewport ? <ReportHeadBar /> : <ReportFootBar />} */}
      <NavTabs userReportData={props.userReportData} />
    </div>
  );
}

// function ReportHeadBar() {
//   return <NavTabs />;
// }

// function ReportFootBar() {
//   return <div>there</div>;
// }

function NavTabs(props) {
  const [value, setValue] = React.useState("1");
  const viewport = Viewport(600);
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
          <TabList onChange={handleChange}>
            {tabNames.map((tab) => {
              return (
                <Tab key={tab.value} sx={{fontSize:viewport?".7vw":"2.2vw"}} label={tab.label} value={tab.value}></Tab>
              );
            })}
          </TabList>
        </Box>
        {tabNames.map((tab) => {
          return (
            <TabPanel key={tab.value} value={tab.value}>
              {props.userReportData.map((report) => {
                if (report.docType === Number(value)) {
                  return <ReportCard report={report} />;
                }
              })}
            </TabPanel>
          );
        })}
      </TabContext>
    </Box>
  );
}

function ReportCard(props) {
  const viewport = Viewport(600)
  return (
    <Paper sx={{bgcolor:"#BBE1FA", padding:viewport?"1vw":"5vw"}}>
    <div style={{display:"flex", alignItems:"center", flexDirection:"row"}}>
      <h3 style={{ ...TitleStyle, paddingRight:"1vw"}}>Report ID:</h3>
      <p style={{ ...BodyStyle }}>{props.report.reportId}</p></div>
      <Button variant="outlined" href={props.report.docUrl} target="_blank" rel="noopener noreferrer">
        Open
      </Button>
    </Paper>
  );
}
