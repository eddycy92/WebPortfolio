import { Grid } from "@chakra-ui/react";
import { ImageC } from "../index";
import React from "react";

function FeaturedCard() {
  return (
    <Grid >
      <figure className="figure">
        <ImageC />
        <figcaption>
          <h2 className="font-weight-bold">Title across image</h2>
        </figcaption>
      </figure>
      <div>
        <Grid>
          <p className="align-center">Content</p>
          <button className="btn btn-primary">Learn More</button>
        </Grid>
      </div>
    </Grid>
  );
}

export default FeaturedCard;
