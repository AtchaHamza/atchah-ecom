import { createAction } from '@ngrx/store'

export const getCategoriesAction = createAction('[Category] Get Categories')
export const getCategoriesActionSuccess = createAction(
    '[Category] Get Categories Success',
    (categories: string[]) => ({ categories })
)
export const getCategoriesActionFailure = createAction(
    '[Category] Get Categories Failure',
    (error: string) => ({ error })
)
