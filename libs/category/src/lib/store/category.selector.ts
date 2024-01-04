import { createFeature, createFeatureSelector, createSelector } from '@ngrx/store';
import { CategoryState, categoryReducer } from './category.reducer'

const categoryFeatureKey = 'category'
const selectCategoryState = createFeatureSelector<CategoryState>(categoryFeatureKey);

export const categoryFeature = createFeature({
  name: categoryFeatureKey,
  reducer: categoryReducer
})

export const selectCategories = createSelector(
    selectCategoryState,
    (state) => state.categories
);
export const selectError = createSelector(
    selectCategoryState,
    (state) => state.error
);