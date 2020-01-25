import React, { useState } from "react";
import { TextField, withStyles, Button } from "@material-ui/core";

const styles = theme => ({
  textField: {
    marginTop: "30px",
    borderColor: "white"
  },
  input: {
    color: "#c5c7c7"
  }
});

const SignInForm = props => {
  const { classes } = props;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form>
      <TextField
        fullWidth
        value={email}
        onChange={e => {
          setEmail(e.target.value);
        }}
        placeholder="Email"
        type="email"
        className={classes.textField}
        InputProps={{
          className: classes.input
        }}
      />
      <TextField
        fullWidth
        value={password}
        onChange={e => {
          setPassword(e.target.value);
        }}
        placeholder="Password"
        type="password"
        className={classes.textField}
        InputProps={{
          className: classes.input
        }}
      />

      <Button
        style={{ borderColor: "#66fcf1", color: "#c5c7c7", marginTop: "30px" }}
        variant="outlined"
        fullWidth
        color="inherit"
      >
        Sign in
      </Button>
    </form>
  );
};

export default withStyles(styles)(SignInForm);
