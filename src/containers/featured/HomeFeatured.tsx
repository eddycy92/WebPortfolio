
import {FeaturedCard } from "../../components/index";
import React from "react";
import { Box, Grid } from "@chakra-ui/react";

function HomeFeatured() {
  return (
    <Box>
      <h1 className="text-lg-center">Featured</h1>
      <Grid >
        <FeaturedCard />
        <FeaturedCard />
        <FeaturedCard />
      </Grid>
    </Box>
  );
}

export default HomeFeatured;
