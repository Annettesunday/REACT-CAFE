import Menu from "../apis/Menu";

export const signIn = user => async dispatch => {
  try {
    console.log("loading");
    const response = await Menu.post("/login", user);
    console.log("the response is", response.data);
    return dispatch({
      type: "SIGN_IN",
      payload: response.data
    });
  } catch (error) {
    console.log(error.response);
  }
  console.log("finished");
};
