import { createSelector } from "reselect";

const selectCategories = (state) => state.categories;

export const selectCategorySections = createSelector(
  [selectCategories],
  (category) => category.sections
);

export const selectCategory = (categoryId) =>
  createSelector([selectCategorySections], (sections) =>
    sections ? sections.filter((section) => section.id === categoryId) : null
  );
