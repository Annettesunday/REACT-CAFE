import {
  CREATE_MENU_SUCCESSFULLY,
  FETCH_MENUS,
  DELETE_MENU,
  EDIT_MENU,
  FETCH_MENU
} from "../actions/actionTypes";

const INITIAL_STATE = {
  menus: []
};

const menuReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CREATE_MENU_SUCCESSFULLY:
      return { ...state, menus: [action.payload, state.menus] };
    case FETCH_MENUS:
      return action.payload;
    case DELETE_MENU:
      return state.filter(menu => menu.menuId !== action.payload);
      case EDIT_MENU:
        return {...state, menus: [action.payload]}
      case FETCH_MENU:
        return action.payload
    default:
      return state;
  }
};

export default menuReducer;
