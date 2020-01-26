import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import {
  TextField,
  makeStyles,
  Button,
  CircularProgress
} from "@material-ui/core";
import { Alert, AlertTitle } from "@material-ui/lab";
import { signUp } from "../../store/actions/authActions";
import { connect } from "react-redux";

const validationSchema = Yup.object().shape({
  firstName: Yup.string()
    .max(255, "Your first name is too long lol!")
    .required("Please enter your first name"),
  lastName: Yup.string()
    .max(255, "Your last name is too long lol!")
    .required("Please enter your last name"),
  email: Yup.string()
    .email("Please enter a valid email address")
    .max(255, "Your email is too long!")
    .required("Please enter your email address"),
  password: Yup.string()
    .max(255, "You password is too long!")
    .required("Please enter a new password")
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

const SignUpForm = props => {
  const { clearErrors, signUp, authErr } = props;
  const classes = useStyles();

  return (
    <Formik
      initialValues={{ firstName: "", lastName: "", email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        clearErrors();
        await signUp(values);
        setSubmitting(false);
        resetForm();
      }}
    >
      {({
        values,
        errors,
        touched,
        handleBlur,
        handleChange,
        handleSubmit,
        isSubmitting
      }) => (
        <form onSubmit={handleSubmit}>
          {authErr ? (
            <Alert
              variant="filled"
              severity="error"
              onClose={() => clearErrors()}
            >
              <AlertTitle>Sign up failed</AlertTitle> {authErr}
            </Alert>
          ) : null}
          {(errors.firstName && touched.firstName) ||
          (errors.lastName && touched.lastName) ||
          (errors.email && touched.email) ||
          (errors.password && touched.password) ? (
            <Alert severity="error" variant="filled">
              {errors.firstName && touched.firstName ? (
                <div>- {errors.firstName}</div>
              ) : null}
              {errors.lastName && touched.lastName ? (
                <div>- {errors.lastName}</div>
              ) : null}
              {errors.email && touched.email ? (
                <div>- {errors.email}</div>
              ) : null}
              {errors.password && touched.password ? (
                <div>- {errors.password}</div>
              ) : null}
            </Alert>
          ) : null}
          <TextField
            fullWidth
            name="firstName"
            value={values.firstName}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="First name"
            type="text"
            className={classes.textField}
            InputProps={{
              className: classes.input
            }}
            error={touched.firstName && errors.firstName ? true : false}
          />

          <TextField
            fullWidth
            name="lastName"
            value={values.lastName}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Last name"
            type="text"
            className={classes.textField}
            InputProps={{
              className: classes.input
            }}
            error={touched.lastName && errors.lastName ? true : false}
          />

          <TextField
            fullWidth
            name="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Email"
            type="email"
            className={classes.textField}
            InputProps={{
              className: classes.input
            }}
            error={touched.email && errors.email ? true : false}
          />

          <TextField
            fullWidth
            name="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Password"
            type="password"
            className={classes.textField}
            InputProps={{
              className: classes.input
            }}
            error={touched.password && errors.password ? true : false}
          />
          <Button
            type="submit"
            style={{
              borderColor: "#66fcf1",
              color: "#c5c7c7",
              marginTop: "30px"
            }}
            variant="outlined"
            fullWidth
            color="inherit"
          >
            {isSubmitting ? <CircularProgress /> : "Sign up"}
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
    signUp: userInfo => dispatch(signUp(userInfo)),
    clearErrors: () => dispatch({ type: "CLEAR_ERR" })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);
