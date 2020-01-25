const initialState = {
  authErr: null
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_SUC":
      console.log("YES");
      return {
        ...state,
        authErr: null
      };
    case "LOGIN_ERR":
      console.log("NO");
      return {
        ...state,
        authErr: "LOGIN FAILED"
      };
    case "LOG_OUT":
      console.log("LOGGED OUT");
      return state;
    case "LOG_OUT_ERR":
      console.log(action.err);
      return state;
    case "SIGNUP_SUC":
      console.log("OK");
      return state;
    case "SIGNUP_ERR":
      console.log(action.err);
      return state;
    default:
      return state;
  }
};

export default authReducer;
