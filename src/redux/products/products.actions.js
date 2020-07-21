import ProductActionTypes from "./products.types";

import ProductsData from "../../data/products.data";

export const fetchCategoryProducts = (categoryId) => (dispatch) => {
  const categoryProducts = ProductsData.filter(
    (product) => product.categoryId === Number(categoryId)
  );
  dispatch({
    type: ProductActionTypes.SELECT_CATEGORY_PRODUCTS,
    payload: categoryProducts,
  });
};

export const selectProducts = (keyword) => (dispatch) => {
  let selectedProducts = [];

  if (keyword.length > 1) {
    selectedProducts = ProductsData.filter((product) =>
      product.name.toLowerCase().includes(keyword.toLowerCase())
    );
  }

  dispatch({
    type: ProductActionTypes.SELECT_CATEGORY_PRODUCTS,
    payload: selectedProducts,
  });
};
