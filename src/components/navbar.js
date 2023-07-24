import React from "react";
import { AppBar, Button, Grid, Typography, styled } from "@mui/material";

const StyledAppBar = styled(AppBar)({
  backgroundColor: "#14213d",
});

const StyledButton = styled(Button)({
  color: "#e5e5e5",
  "&:hover": {
    backgroundColor: "#e5e5e5",
    color: "#14213d",
  },
});

function NavBar() {
  return (
    <>
      <StyledAppBar>
        <Grid container justifyContent="center">
          <Grid item>
            <StyledButton color="inherit">
              <Typography variant="h6">Home</Typography>
            </StyledButton>
          </Grid>
          <Grid item>
            <StyledButton
              color="inherit"
              component="a"
              href="https://drive.google.com/uc?export=download&id=1pxDqHYu5RgW7Lmstp4Q02COvjxlGnFKs"
            >
              <Typography variant="h6">Resume</Typography>
            </StyledButton>
          </Grid>
          <Grid item>
            <StyledButton color="inherit">
              <Typography variant="h6">Contact</Typography>
            </StyledButton>
          </Grid>
        </Grid>
      </StyledAppBar>
    </>
  );
}
export default NavBar;
