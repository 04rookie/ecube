import React from "react";
import proto from "./imageproto.png";
import { Grid, Container } from "@mui/material";
export default function Features() {
  const data = [
    {
      key: 1,
      title: "Lorem Ipsum",
      body: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      img: proto,
      inverse: false,
    },
    {
      key: 2,
      title: "Lorem Ipsum",
      body: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      img: proto,
      inverse: true,
    },
    {
        key:3,
      title: "Lorem Ipsum",
      body: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      img: proto,
      inverse: false,
    },
  ];
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
      <Grid item xs={12} sm={6} sx={{ padding: "3vw" }}>
        {props.record.inverse ? (
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img
              src={props.record.img}
              style={{ width: "15vw" }}
              alt="man"
            ></img>
          </div>
        ) : (
          <>
            <h2>{props.record.title}</h2>
            <p>{props.record.body}</p>
          </>
        )}
      </Grid>
      <Grid item xs={12} sm={6} sx={{ padding: "3vw" }}>
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
