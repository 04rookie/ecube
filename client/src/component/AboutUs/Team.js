import React from "react";
import { Grid } from "@mui/material";
import TeamData from "./TeamData";
import Avatar from "@mui/material/Avatar";
import { TitleStyle, BodyStyle, Viewport } from "../GlobalStyle/GlobalStyle";
export default function Team() {
    const viewport = Viewport(800);
  return (
    <div style={{padding:viewport?"0vw 25vw 0vw":"0vw 5vw 0vw"}}>
    <h1 style={{...TitleStyle}}>Our team members</h1>
      <Grid container>
        {TeamData.map((member) => {
          return <Member member={member} viewport={viewport} />;
        })}
      </Grid>
    </div>
  );
}

function Member(props) {
  return (
    <div style={{padding:props.viewport?"1.5vw 0vw":"7vw 0vw"}}>
      <Grid item xs={3} sm={3}>
        <Avatar alt={props.member.name} src={props.member.img} sx={{width:props.viewport?"3vw":"15vw", height:props.viewport?"3vw":"15vw"}} />
      </Grid>
      <Grid item xs={9} sm={9}>
        <h1 style={{ ...TitleStyle, fontSize:props.viewport?"1vw":"4vw"}}>{props.member.name}</h1>
      </Grid>
      <Grid item xs={12} sm={12}>
        <p style={{ ...BodyStyle }}>{props.member.experience}</p>
        <p style={{ ...BodyStyle }}>{props.member.education}</p>
        <p style={{ ...BodyStyle }}>{props.member.speciality}</p>
      </Grid>
    </div>
  );
}
