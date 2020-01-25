import React from "react";
import { AppBar, Toolbar, Typography, IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";

import SignedOutLinks from "./SignedOutLinks";
import SignedInLinks from "./SignedInLinks";

const useStyles = makeStyles(theme => ({
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

const Header = props => {
  const classes = useStyles();

  return (
    <div>
      <AppBar position="fixed">
        <Toolbar classes={{ root: "header" }}>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            KonafaHEHEXD
          </Typography>
          {props.auth ? <SignedInLinks /> : <SignedOutLinks />}
        </Toolbar>
      </AppBar>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth.uid
  };
};

export default connect(mapStateToProps)(Header);
