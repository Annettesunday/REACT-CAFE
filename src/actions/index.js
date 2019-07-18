import Menu from "../apis/Menu";
import { SIGN_IN, SIGN_UP, SET_ERRORS } from "./actionTypes";
import history from "../history";

export const setErrors = errors => ({ type: SET_ERRORS, payload: errors });
export const signUp = user => async dispatch => {
  try {
    const response = await Menu.post("/signup", user);
    console.log("The response is", response.data);
    dispatch({
      type: SIGN_UP,
      payload: response.data
    });
    history.push("/");
  } catch (error) {
    // console.log(error.response.data);
    dispatch(setErrors(error.response.data))
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
    history.push("/");
  } catch (error) {
    // console.log(error.response.data);
    dispatch(setErrors(error.response.data))
  }
  console.log("finished");
};
