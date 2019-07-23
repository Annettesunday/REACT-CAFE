import { SET_USER, SET_UNAUTHENTICATED } from "../actions/actionTypes";

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
    case SET_UNAUTHENTICATED:
      return INITIAL_STATE;
    default:
      return state;
  }
};

export default userReducer;
