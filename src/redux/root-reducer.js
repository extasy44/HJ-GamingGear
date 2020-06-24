import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import cartReducer from "./cart/cart.reducer";
import categoriesReducer from "./categories/categories.reducer";
import productReducer from "./products/products.reducer";
import menuReducer from "./menu/menu.reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

const rootReducer = combineReducers({
  cart: cartReducer,
  categories: categoriesReducer,
  currentProducts: productReducer,
  isMenuOpen: menuReducer,
});

export default persistReducer(persistConfig, rootReducer);
