import ProductActionTypes from "./products.types";

const INITIAL_STATE = {
  categoryProducts: [],
  searchKeyword: "",
};

const productReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ProductActionTypes.SELECT_CATEGORY_PRODUCTS:
      return {
        ...state,
        categoryProducts: action.payload,
      };

    default:
      return state;
  }
};

export default productReducer;
