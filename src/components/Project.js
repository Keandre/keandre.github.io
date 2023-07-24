import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

function Project({ title, text }) {
  return (
    <>
      <Grid container justifyContent="center">
        <Grid item xs={12} sm={8} md={6}>
          <Box display="flex" flexDirection="column" alignItems="center">
            <h3>{title}</h3>
            <p>{text}</p>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default Project;
