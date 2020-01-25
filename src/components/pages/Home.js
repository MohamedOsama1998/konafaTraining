import React from "react";
import { Grid } from "@material-ui/core";

const Home = () => {
  return (
    <Grid container direction="row" justify="flex-start" alignItems="stretch">
      <Grid item xs={7} style={{ backgroundColor: "#d9d9d9", height: "100%" }}>
        rfdgsdfg
      </Grid>
      <Grid item xs={5} style={{ backgroundColor: "#737373" }}>
        asdfasdf
      </Grid>
    </Grid>
  );
};

export default Home;
