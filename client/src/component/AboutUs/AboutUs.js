import React from "react";
import Introduction from "./Introduction";
import { Grid } from "@mui/material";
import Policy from "./Policy";
function AboutUs() {
  return (
    <div>
      <Grid container>
        <Grid item xs={12} sm={12}><Introduction /></Grid>
        <Grid item xs={12} sm={12}><Policy/></Grid>
      </Grid>
    </div>
  );
}

export default AboutUs;
