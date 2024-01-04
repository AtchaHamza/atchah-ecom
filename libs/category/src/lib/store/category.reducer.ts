import { createReducer, on } from '@ngrx/store';
import { getCategoriesActionFailure, getCategoriesActionSuccess } from './category.action';

export interface CategoryState{
    categories: string[]
    currentCategory: string
    error: string
}

const intialState: CategoryState = {
    categories: [],
    currentCategory: '',
    error: ''
}

export const categoryReducer = createReducer(
    intialState,
    on(getCategoriesActionSuccess, (state, action) =>{
        return {
            ...state,
            categories: action.categories
        }
    }),
    on(getCategoriesActionFailure, (state, action) =>{
        return {
            ...state,
            categories: [],
            error: action.error
        }
    })
)