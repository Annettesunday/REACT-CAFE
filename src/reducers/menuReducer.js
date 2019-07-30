import { CREATE_MENU_SUCCESSFULLY, FETCH_MENUS } from "../actions/actionTypes";

const INITIAL_STATE = {
  menus: []
};

const menuReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CREATE_MENU_SUCCESSFULLY:
      return { menus: [action.payload, ...state.menus] };
    case FETCH_MENUS:
      return action.payload;
    default:
      return state;
  }
};

export default menuReducer;
