import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import TestimonialsData from "./TestimonialsData";
import {Viewport} from "../GlobalStyle/GlobalStyle"
export default function Testimonials() {
  const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const handleStepChange = (step) => {
    setActiveStep(step);
  };
  const viewport = Viewport(800);
  return (
    <><div style={{padding:"5vw 3vw 5vw", display:"flex", justifyContent:"center", backgroundColor:"#0F4C75"}}>
      <Box sx={{ maxWidth: 400, flexGrow: 1 }}>
        <Paper
          square
          elevation={0}
          sx={{
            display: "flex",
            alignItems: "center",
            height: "5vw",
            pl: 2,
            bgcolor: "#0F4C75",
          }}
        >
        </Paper>
        <AutoPlaySwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          animateTransitions={true}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
        >
          {TestimonialsData.map((step, index) => (
            <div style={{display:"flex", justifyContent:"center", alignItems:"center"}} key={step.label}>
              {Math.abs(activeStep - index) <= 2 ? (
                <Box
                  component="img"
                  sx={{
                    height: viewport?"5vw":"30vw",
                    width: viewport?"5vw":"30vw",
                    display: "block",
                    overflow: "hidden",
                  }}
                  src={step.imgPath}
                  alt={step.label}
                />
              ) : null}
            </div>
          ))}
        </AutoPlaySwipeableViews>
      </Box>
      </div>
    </>
  );
}
