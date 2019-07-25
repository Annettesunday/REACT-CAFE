import { CREATE_IMAGE_URL_SUCCESSFUL } from "../actions/actionTypes";

const INITIAL_STATE = {
    imageUrl: ""
};

const imageReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CREATE_IMAGE_URL_SUCCESSFUL:
      return { ...action.payload };
    default:
      return state;
  }
};

export default imageReducer;
