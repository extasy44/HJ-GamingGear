import { createSelector } from "reselect";

const selectIsMenuOpen = (state) => state.isMenuOpen;

export const selectMenuOpen = createSelector(
  [selectIsMenuOpen],
  (menu) => menu.menuOpen
);
