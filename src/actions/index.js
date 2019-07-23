import Menu from "../apis/Menu";
import {
  SIGN_IN,
  SIGN_UP,
  SET_ERRORS,
  SET_USER,
  SET_UNAUTHENTICATED
} from "./actionTypes";
import history from "../history";

export const setAuthorizationToken = token => {
  // Add bearer signature
  const FBIToken = `Bearer ${token}`;

  // set token to local storage which only stores strings
  localStorage.setItem("jwtToken", FBIToken);

  // set token to auth header
  Menu.defaults.headers.common["Authorization"] = FBIToken;
};

export const removeAuthorizationToken = () => {
  localStorage.removeItem("jwtToken");
  delete Menu.defaults.headers.common["Authorization"];
};

export const setErrors = errors => ({ type: SET_ERRORS, payload: errors });
export const signUp = user => async dispatch => {
  try {
    const response = await Menu.post("/signup", user);
    console.log("The response is", response.data);
    dispatch({
      type: SIGN_UP,
      payload: response.data
    });
    setAuthorizationToken(response.data.token);
    dispatch(getUser());
    history.push("/");
  } catch (error) {
    console.log(error.response.data);
    dispatch(setErrors(error.response.data));
  }
};
export const signIn = user => async dispatch => {
  try {
    const response = await Menu.post("/login", user);
    console.log("the response is", response.data);
    dispatch({
      type: SIGN_IN,
      payload: response.data
    });
    setAuthorizationToken(response.data.token);
    dispatch(getUser());

    history.push("/");
  } catch (error) {
    console.log(error.response.data);
    dispatch(setErrors(error.response.data));
  }
  console.log("finished");
};

export const getUser = () => async dispatch => {
  try {
    const response = await Menu.get("/user");
    dispatch({
      type: SET_USER,
      payload: response.data
    });
    console.log("This is from the user method", response.data);
  } catch (error) {
    dispatch(setErrors(error.response.data));
  }
};

export const logout = () => dispatch => {
  removeAuthorizationToken();
  dispatch({
    type: SET_UNAUTHENTICATED
  });
};
