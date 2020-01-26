import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { makeStyles } from "@material-ui/core/styles";
import { signIn } from "../../store/actions/authActions";
import { connect } from "react-redux";
import { TextField, Button, CircularProgress } from "@material-ui/core";
import { Alert, AlertTitle } from "@material-ui/lab";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Please enter a valid email address")
    .max(255, "You email is too long!")
    .required("Please enter your email"),
  password: Yup.string()
    .max(255, "Your password is too long!")
    .required("Please enter your password.")
});

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
  const { signIn, authErr, clearErrors } = props;

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        clearErrors();
        await signIn(values);
        setSubmitting(false);
        resetForm();
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting
      }) => (
        <form onSubmit={handleSubmit}>
          {(errors.email && touched.email) ||
          (errors.password && touched.password) ? (
            <Alert severity="error" variant="filled">
              {errors.email && touched.email ? (
                <div>- {errors.email}</div>
              ) : null}
              {errors.password && touched.password ? (
                <div>- {errors.password}</div>
              ) : null}
            </Alert>
          ) : null}
          {authErr ? (
            <Alert
              variant="filled"
              severity="error"
              style={{ marginBottom: "20px" }}
              onClose={() => {
                clearErrors();
              }}
            >
              <AlertTitle>Login failed</AlertTitle>
              {authErr}
            </Alert>
          ) : null}

          <TextField
            error={touched.email && errors.email ? true : false}
            fullWidth
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Email"
            type="email"
            value={values.email}
            className={classes.textField}
            InputProps={{
              className: classes.input
            }}
          />

          <TextField
            error={touched.password && errors.password ? true : false}
            fullWidth
            name="password"
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Password"
            type="password"
            value={values.password}
            className={classes.textField}
            InputProps={{
              className: classes.input
            }}
          />

          <Button
            style={{
              borderColor: "#66fcf1",
              color: "#c5c7c7",
              marginTop: "30px"
            }}
            type="submit"
            variant="outlined"
            fullWidth
            color="inherit"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <CircularProgress size={24} style={{ color: "#45a29e" }} />
            ) : (
              "Sign in"
            )}
          </Button>
        </form>
      )}
    </Formik>
  );
};

const mapStateToProps = state => {
  return {
    authErr: state.auth.authErr
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signIn: userInfo => dispatch(signIn(userInfo)),
    clearErrors: () => dispatch({ type: "CLEAR_ERR" })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignInForm);
