import Menu from "../apis/Menu";
import {
  SIGN_IN,
  SIGN_UP,
  SET_ERRORS,
  SET_USER,
  SET_UNAUTHENTICATED,
  CREATE_IMAGE_URL_SUCCESSFUL,
  CREATE_MENU_SUCCESSFULLY,
  FETCH_MENUS,
  DELETE_MENU,
  EDIT_MENU,
  FETCH_MENU
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
  } catch (error) {
    console.log("The error is", error);
    dispatch(setErrors(error.response.data));
  }
};

export const logout = () => dispatch => {
  removeAuthorizationToken();
  dispatch({
    type: SET_UNAUTHENTICATED
  });
};

export const createImageUrl = image => async dispatch => {
  try {
    const response = await Menu.post("/menu/image", image);
    dispatch({
      type: CREATE_IMAGE_URL_SUCCESSFUL,
      payload: response.data.menuImageUrl
    });
    console.log(response.data.menuImageUrl);
  } catch (error) {
    console.log(error.response.data);
  }
};

export const createMenu = values => async dispatch => {
  try {
    const response = await Menu.post("/menu", values);
    console.log("I am the response", response.data);
    dispatch({
      type: CREATE_MENU_SUCCESSFULLY,
      payload: response.data
    });
    history.push("/");
  } catch (error) {
    console.log("This is the error", error);
    console.log("This is the error", error.response);
  }
};

export const fetchMenus = () => async dispatch => {
  try {
    const response = await Menu.get("/menus");
    dispatch({
      type: FETCH_MENUS,
      payload: response.data
    });
  } catch (error) {
    console.log(error);
  }
};

export const deleteMenu = id => async dispatch => {
  try {
    console.log(id);
    const response = await Menu.delete(`/menu/${id}`);
    dispatch({
      type: DELETE_MENU,
      payload: id
    });
    console.log(response, "You wanna delete me");
  } catch (error) {
    console.log(error);
  }
};

export const editMenu = (id, values) => async dispatch => {
  try {
    const response = await Menu.patch(`/menu/${id}/edit`, values);
    dispatch({
      type: EDIT_MENU,
      payload: response.data
    });
    console.log(response);
    history.push("/");
  } catch (error) {
    console.log(error);
  }
};

export const fetchMenu = id => async dispatch => {
  try {
    const response = await Menu.get(`/menu/${id}`);
    dispatch({
      type: FETCH_MENU,
      payload: response.data
    });
    // console.log(response.data)
  } catch (error) {
    console.log(error);
  }
};
