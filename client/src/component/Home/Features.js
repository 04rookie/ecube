import React from "react";
import { Grid, Container } from "@mui/material";
import FeatureData from "./FeatureData";
import { TitleStyle, BodyStyle, Viewport } from "../GlobalStyle/GlobalStyle";
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
  const viewport = Viewport(800)
  const gridItemFeatureStyle = {
    padding: "5vw 6vw 5vw",
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
  };
  return (
    <>
      {/* <Grid item xs={12} sm={6} sx={{ padding: "3vw", display:"flex", justifyContent:"center", alignContent:"center", flexDirection:"column"}}>
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
            <h2 style={TitleStyle}>{props.record.title}</h2>
            <p style={BodyStyle}>{props.record.body}</p>
          </div>
        )}
      </Grid>
      <Grid item xs={12} sm={6} sx={{ padding: "5vw 3vw 5vw", display:"flex", justifyContent:"center", alignContent:"center", flexDirection:"column" }}>
        {props.record.inverse ? (
          <>
            <h2 style={TitleStyle}>{props.record.title}</h2>
            <p style={BodyStyle}>{props.record.body}</p>
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
      </Grid> */}
      <Grid item xs={12} sm={12}>
        <Grid container>
          <Grid
            item
            xs={12}
            sm={6}
            order={{ sm: props.record.inverse ? 1 : 2, xs: 2 }}
            sx={{...gridItemFeatureStyle,
              flexDirection: "column"
            }}
          >
            <>
              <h2 style={TitleStyle}>{props.record.title}</h2>
              <p style={BodyStyle}>{props.record.body}</p>
            </>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            order={{ sm: props.record.inverse ? 2 : 1, xs: 1 }}
            sx={gridItemFeatureStyle}
          >
            <img
              src={props.record.img}
              style={{ width: viewport?"15vw":"40vw"}}
              alt="man"
            ></img>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
