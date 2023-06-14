export const authInitialState = {
  username: "",
  password: "",
  firstName: "",
  lastName: "",
  location: "",
};

export const authReducer = (state, action) => {
  switch (action.type) {
    case "SET_USERNAME":
      return { ...state, username: action.payload };
    case "SET_PASSWORD":
      return { ...state, password: action.payload };
    case "SET_FIRSTNAME":
      return { ...state, firstName: action.payload };
    case "SET_LASTNAME":
      return { ...state, lastName: action.payload };
    case "SET_LOCATION":
      return { ...state, location: action.payload ?? "/" };
    case "LOG_OUT":
      return {
        ...state,
        username: "",
        password: "",
        firstName: "",
        lastName: "",
        location: "",
      };
    default:
      return { ...state };
  }
};