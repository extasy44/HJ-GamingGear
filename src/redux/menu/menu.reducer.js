import MenuActionTypes from "./menu.types";

const INITIAL_STATE = {
  menuOpen: false,
};

const menuReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case MenuActionTypes.TOGGLE_MENU:
      return {
        ...state,
        menuOpen: !state.menuOpen,
      };

    default:
      return state;
  }
};

export default menuReducer;
