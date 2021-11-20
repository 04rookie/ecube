import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import { TitleStyle, BodyStyle, Viewport } from "../GlobalStyle/GlobalStyle";
import ServiceDescription from "./ServiceDescription";
export default function ServiceCard(props) {
  const viewport = Viewport(800);
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <ServiceDescription
        open={open}
        handleClickOpen={handleClickOpen}
        handleClose={handleClose}
        cardData={props.cardData}
      />
      <Card sx={{ maxWidth: viewport ? "30vw" : "55vw" }}>
        <CardMedia
          component="img"
          height="140"
          image={props.cardData.img}
          alt={props.cardData.title}
        />
        <CardContent>
          <h2 style={{ ...TitleStyle }}>{props.cardData.title}</h2>
          <p style={{ ...BodyStyle }}>{props.cardData.description}</p>
          {/* <ul>
                {props.cardData.body.map((points)=>{
                    return <li><p style={{...BodyStyle}}>{points}</p></li>
                })}
            </ul> */}
        </CardContent>
        <CardActions>
          <Button size="small" onClick={handleClickOpen}>
            Learn More
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
