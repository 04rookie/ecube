import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import proto from "./imageproto.png"
import TestimonialsData from "./TestimonialsData";
export default function Testimonials() {
  const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = TestimonialsData.length;
  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <><div style={{padding:"5vw 3vw 5vw", display:"flex", justifyContent:"center", backgroundColor:"#0F4C75"}}>
      <Box sx={{ maxWidth: 400, flexGrow: 1 }}>
        <Paper
          square
          elevation={0}
          sx={{
            display: "flex",
            alignItems: "center",
            height: 50,
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
                    height: "5vw",
                    width: "5vw",
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
