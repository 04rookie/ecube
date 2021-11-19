import React from "react";
import { Grid, Container } from "@mui/material";
import FeatureData from "./FeatureData";
export default function Features() {
  const data = FeatureData;
  return (
    <div>
      <Grid container>
        {data.map((record) => {
          return <Feature key={record.key} record={record} />;
        })}
      </Grid>
    </div>
  );
}

function Feature(props) {
  return (
    <>
      <Grid item xs={12} sm={6} sx={{ padding: "3vw", display:"flex", justifyContent:"center", alignContent:"center", flexDirection:"column"}}>
        {props.record.inverse ? (
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img
              src={props.record.img}
              style={{ width: "15vw" }}
              alt="man"
            ></img>
          </div>
        ) : (
          <div style={{}}>
            <h2>{props.record.title}</h2>
            <p>{props.record.body}</p>
          </div>
        )}
      </Grid>
      <Grid item xs={12} sm={6} sx={{ padding: "5vw 3vw 5vw", display:"flex", justifyContent:"center", alignContent:"center", flexDirection:"column" }}>
        {props.record.inverse ? (
          <>
            <h2>{props.record.title}</h2>
            <p>{props.record.body}</p>
          </>
        ) : (
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img
              src={props.record.img}
              style={{ width: "15vw" }}
              alt="man"
            ></img>
          </div>
        )}
      </Grid>
    </>
  );
}
