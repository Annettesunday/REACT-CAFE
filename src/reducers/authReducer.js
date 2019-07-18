import { SIGN_IN, SIGN_UP } from "../actions/actionTypes";
const INITIAL_STATE = {
  token: null
};

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGN_IN:
      return { ...state, token: action.payload };
    case SIGN_UP:
      return { ...state, token: action.payload };
    default:
      return state;
  }
};

export default authReducer;
