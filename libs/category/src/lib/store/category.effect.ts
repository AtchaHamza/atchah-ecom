import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { getCategoriesAction, getCategoriesActionSuccess, getCategoriesActionFailure } from "./category.action";
import { CategoryService } from "../services/category/category.service";
import { catchError, exhaustMap, map, of } from "rxjs";

@Injectable()
export class CategoryEffects {

  loadMovies$ = createEffect(() => this.actions$.pipe(
    ofType(getCategoriesAction),
    exhaustMap(() => this.categoryService.getCategories()
      .pipe(
        map((categories) => getCategoriesActionSuccess(categories)),
        catchError((error) => of(getCategoriesActionFailure(error)))
      )
    )
  ));

  constructor(
    private actions$: Actions,
    private categoryService: CategoryService
  ) {}
}