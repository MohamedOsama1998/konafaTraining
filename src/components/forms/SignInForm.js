import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { signIn } from "../../store/actions/authActions";
import { connect } from "react-redux";
import { TextField, Button } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  textField: {
    marginTop: "30px",
    borderColor: "white"
  },
  input: {
    color: "#c5c7c7"
  }
}));

const SignInForm = props => {
  const classes = useStyles();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = () => {
    const userInfo = { email, password };
    props.signIn(userInfo);
  };

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
        type="submit"
        variant="outlined"
        fullWidth
        color="inherit"
        onClick={() => {
          handleSubmit();
        }}
      >
        Sign in
      </Button>
    </form>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    signIn: userInfo => dispatch(signIn(userInfo))
  };
};

export default connect(null, mapDispatchToProps)(SignInForm);
