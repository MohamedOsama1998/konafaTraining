import React, { useState } from "react";
import { connect } from "react-redux";
import { Grid, Typography, Button, ButtonGroup } from "@material-ui/core";
import SignInForm from "../forms/SignInForm";
import SignUpForm from "../forms/SignUpForm";

const Home = props => {
  const [activity, setActivity] = useState(0);

  return (
    <Grid
      container
      direction="row"
      justify="flex-start"
      alignItems="stretch"
      style={{ minHeight: "100vh", paddingTop: "64px" }}
    >
      <Grid item xs={7} classes={{ root: "leftGroup " }}>
        <Typography variant="h3" classes={{ root: "titleText" }}>
          Welcome to absolutely nothing!
        </Typography>
        <Typography variant="h6" classes={{ root: "secondaryText" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Typography>
        {props.isAuth ? null : (
          <ButtonGroup
            variant="outlined"
            color="inherit"
            aria-label="text primary button group"
            classes={{ root: "buttonGroup" }}
            size="large"
          >
            <Button
              style={{ fontSize: 40, borderColor: "#66fcf1" }}
              onClick={() => setActivity(0)}
            >
              Join now
            </Button>
            <Button
              style={{ fontSize: 40, borderColor: "#66fcf1" }}
              onClick={() => setActivity(1)}
            >
              Log in
            </Button>
          </ButtonGroup>
        )}
      </Grid>
      <Grid item xs={5} classes={{ root: "form" }}>
        {props.isAuth ? (
          <Typography variant="h4" classes={{ root: "titleText" }}>
            Hola
          </Typography>
        ) : (
          <div> {activity === 1 ? <SignInForm /> : <SignUpForm />}</div>
        )}
      </Grid>
    </Grid>
  );
};

const mapStateToProps = state => {
  return {
    isAuth: state.firebase.auth.uid
  };
};

export default connect(mapStateToProps)(Home);
