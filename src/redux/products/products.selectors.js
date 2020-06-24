import { createSelector } from "reselect";

import ProductsData from "../../data/products.data";

export const selectCategoryProducts = (id) =>
  createSelector(ProductsData, (products) =>
    products
      ? products.filter((product) => product.categoryId === Number(id))
      : null
  );
