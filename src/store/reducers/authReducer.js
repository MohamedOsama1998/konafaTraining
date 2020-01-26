const initialState = {
  authErr: null
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CLEAR_ERR":
      return {
        ...state,
        authErr: null
      };
    case "LOGIN_SUC":
      return {
        ...state,
        authErr: null
      };
    case "LOGIN_ERR":
      return {
        ...state,
        authErr: action.err.message
      };
    case "LOG_OUT":
      return state;
    case "LOG_OUT_ERR":
      return {
        ...state,
        authErr: action.err.message
      };
    case "SIGNUP_SUC":
      return state;
    case "SIGNUP_ERR":
      return {
        ...state,
        authErr: action.err.message
      };
    default:
      return state;
  }
};

export default authReducer;
