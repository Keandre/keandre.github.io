import { Paper, Grid } from "@mui/material";

function Item(props) {
  return (
    <Grid container justify="center">
      <Paper>
        <img
          src={props.item.image}
          alt={props.item.name}
          style={{ width: "100%", height: "100%", objectFit: "contain" }}
        />
      </Paper>
    </Grid>
  );
}

export default Item;
