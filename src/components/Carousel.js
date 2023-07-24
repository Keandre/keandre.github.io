import React from "react";
import { makeStyles } from "@material-ui/core";
import Carousel from "react-material-ui-carousel";
import Item from "./Item.js";

const useStyles = makeStyles({
  carousel: {
    border: "1px solid #ccc",
    "& button": {
      backgroundColor: "#fff",
      color: "#000",
      "&:hover": {
        backgroundColor: "#000",
        color: "#fff",
      },
    },
  },
});

function ProjectCarousel({ items }) {
  const classes = useStyles();

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div style={{ width: "50%" }}>
        <Carousel
          className={classes.carousel}
          timeout={{ appear: 1000, enter: 1000, exit: 1000 }}
          interval={4000}
        >
          {items.map((item, i) => (
            <Item key={i} item={item} />
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default ProjectCarousel;
