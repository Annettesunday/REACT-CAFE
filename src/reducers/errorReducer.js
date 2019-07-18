import { SET_ERRORS } from "../actions/actionTypes";

const INITIAL_STATE = {}

const errorReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_ERRORS:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default errorReducer;
