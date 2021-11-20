import React from "react";
import { Grid } from "@mui/material";
import ServicesData from "./ServicesData";
import ServiceCard from "./ServiceCard";
import { Viewport } from "../GlobalStyle/GlobalStyle";
export function Services() {
  const viewport = Viewport(800);
  return (
    <div style={{ padding: viewport ? "5vw 20vw" : "5vw 0vw" }}>
      <Grid container spacing={8}>
        {ServicesData.map((cardData) => {
          return (
            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              lg={4}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <ServiceCard
                key={cardData.title}
                cardData={cardData}
              />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}
