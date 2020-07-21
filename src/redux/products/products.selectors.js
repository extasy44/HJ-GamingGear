import { createSelector } from "reselect";

const selectCurrentProducts = (state) => state.currentProducts;

export const selectCategoryProducts = createSelector(
  [selectCurrentProducts],
  (products) => products.categoryProducts
);

export const selectedProducts = createSelector(
  [selectCurrentProducts],
  (products) => products.selectedProducts
);
