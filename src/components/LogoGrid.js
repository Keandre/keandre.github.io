import * as React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

const logos = [
  "https://imgur.com/o0C8BRh.png",
  "https://imgur.com/fcNt2Cc.png",
  "https://imgur.com/cc0hNxk.png",
  "https://imgur.com/k821qxi.png",
  "https://imgur.com/Nu8C2IF.png",
  "https://imgur.com/RrRAkum.png",
  "https://imgur.com/DRI4gMs.png",
  "https://imgur.com/eVPECAo.png",
];

function LogoGrid() {
  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      <Grid container spacing={2}>
        {logos.map((logo, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <Paper
              component="img"
              alt={`Logo ${index}`}
              src={logo}
              sx={{ width: "100%", height: 200, objectFit: "contain" }}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default LogoGrid;
