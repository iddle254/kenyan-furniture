import { createSelector } from 'reselect';

const selectFurniture = state => state.furniture;

export const selectFurnitureItems = createSelector(
  [selectFurniture],
  furniture => furniture.items
);