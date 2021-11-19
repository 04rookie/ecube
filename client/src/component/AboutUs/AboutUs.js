import React from "react";
import Introduction from "./Introduction";
import { Grid } from "@mui/material";
import Policy from "./Policy";
import Team from "./Team";
function AboutUs() {
  return (
    <div>
      <Grid container>
        <Grid item xs={12} sm={12}><Introduction /></Grid>
        <Grid item xs={12} sm={12}><Policy/></Grid>
        <Grid item xs={12} sm={12}><Team/></Grid>
      </Grid>
    </div>
  );
}

export default AboutUs;
