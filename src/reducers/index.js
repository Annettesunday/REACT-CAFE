import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import userReducer from "./userReducer";
import imageReducer from "./imageReducer";

export default combineReducers({
  form: formReducer,
  auth: authReducer,
  errors: errorReducer,
  user: userReducer,
  imageUrl: imageReducer
});
