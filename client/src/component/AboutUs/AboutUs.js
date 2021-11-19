import React from "react";
import Introduction from "./Introduction";
import { Grid } from "@mui/material";
function AboutUs() {
  return (
    <div>
      <Grid container>
        <Grid item xs={12} sm={12}><Introduction /></Grid>
      </Grid>
    </div>
  );
}

export default AboutUs;
