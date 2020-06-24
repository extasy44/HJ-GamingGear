import ProductActionTypes from "./products.types";

export const fetchCategoryProducts = (categoryProducts) => ({
  type: ProductActionTypes.SELECT_CATEGORY_PRODUCTS,
  payload: categoryProducts,
});
