import Menu from "../apis/Menu";
import { SIGN_IN, SIGN_UP } from "./actionTypes";

export const signUp = user => async dispatch => {
  try {
    const response = await Menu.post("/signup", user);
    console.log("The response is", response.data);
    dispatch({
      type: SIGN_UP,
      payload: response.data
    });
  } catch (error) {
    console.log(error.response.data);
  }
};
export const signIn = user => async dispatch => {
  try {
    const response = await Menu.post("/login", user);
    return dispatch({
      type: SIGN_IN,
      payload: response.data
    });
  } catch (error) {
    console.log(error.response.data);
  }
  console.log("finished");
};
