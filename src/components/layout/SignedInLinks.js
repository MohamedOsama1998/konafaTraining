import React from "react";
import { Button } from "@material-ui/core";
import { connect } from "react-redux";
import { logOut } from "../../store/actions/authActions";

const SignedInLinks = props => {
  return (
    <div>
      <Button
        color="inherit"
        onClick={() => {
          props.logOut();
        }}
      >
        LogOut
      </Button>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    logOut: () => dispatch(logOut())
  };
};

export default connect(null, mapDispatchToProps)(SignedInLinks);
