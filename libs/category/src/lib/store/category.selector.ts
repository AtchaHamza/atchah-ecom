import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CategoryState } from './category.reducer'

const selectCategoryState = createFeatureSelector<CategoryState>('category');

export const selectCategories = createSelector(
    selectCategoryState,
    (state) => state.categories
  );
export const selectError = createSelector(
    selectCategoryState,
    (state) => state.error
);