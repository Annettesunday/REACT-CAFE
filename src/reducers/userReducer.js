import { SET_USER } from "../actions/actionTypes";

const INITIAL_STATE = {
  authenticated: false,
  credentials: {},
  likes: []
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        authenticated: true,
        ...action.payload
      };
    default:
      return state;
  }
};

export default userReducer;
