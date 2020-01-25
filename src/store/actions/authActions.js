export const signIn = userInfo => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    firebase
      .auth()
      .signInWithEmailAndPassword(userInfo.email, userInfo.password)
      .then(() => {
        dispatch({ type: "LOGIN_SUC" });
      })
      .catch(err => {
        dispatch({ type: "LOGIN_ERR", err });
      });
  };
};

export const logOut = () => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch({ type: "LOG_OUT" });
      })
      .catch(err => {
        dispatch({ type: "LOG_OUT_ERR", err });
      });
  };
};

export const signUp = userInfo => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    firebase
      .auth()
      .createUserWithEmailAndPassword(userInfo.email, userInfo.password)
      .then(() => dispatch({ type: "SIGNUP_SUC" }))
      .catch(err => dispatch({ type: "SIGN_UP_ERR", err }));
  };
};
