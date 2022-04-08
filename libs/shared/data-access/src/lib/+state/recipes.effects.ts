import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import * as RecipesActions from './recipes.actions';
import {RecipesDataService} from '../services/recipes-data.service';
import {HttpErrorResponse} from '@angular/common/http';
import {catchError, map, mergeMap} from 'rxjs/operators';
import {RecipeModel} from "@recipes-nx/shared-domain";
import {EMPTY} from "rxjs";
import {optimisticUpdate} from "@nrwl/angular";

@Injectable()
export class RecipesEffects {
  getRecipesCollection$ = createEffect(() =>
    this.actions$.pipe(
      ofType(RecipesActions.getRecipesCollection),
      mergeMap(() => this.recipesDataService.getCollection().pipe(
        map((recipes: RecipeModel[]) => RecipesActions.getRecipesCollectionSuccess({recipes})),
        catchError(error => {
          RecipesActions.getRecipesCollectionFail({error});
          return EMPTY;
        })
      ))
    )
  );

  getRecipesDetails$ = createEffect(() =>
    this.actions$.pipe(
      ofType(RecipesActions.getRecipeDetails),
      mergeMap(action => {
        return this.recipesDataService.getDetails(action.id).pipe(
          map((recipe: RecipeModel) => RecipesActions.getRecipeDetailsSuccess({recipe})),
          catchError((error: HttpErrorResponse) => {
            RecipesActions.getRecipeDetailsFail({error})
            return EMPTY;
          })
        )
      })
    )
  );

  addRecipe$ = createEffect(() =>
    this.actions$.pipe(
      ofType(RecipesActions.addRecipe),
      mergeMap(action => this.recipesDataService.add(action.recipe).pipe(
        map(() => RecipesActions.addRecipeSuccess()),
        catchError((error: HttpErrorResponse) => {
          RecipesActions.addRecipeFail(error)
          return EMPTY;
        })
      ))
    )
  );

  addRecipeSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(RecipesActions.addRecipeSuccess),
      map(() => RecipesActions.getRecipesCollection())
    )
  );

  updateRecipe$ = createEffect(() =>
    this.actions$.pipe(
      ofType(RecipesActions.updateRecipe),
      mergeMap(action => this.recipesDataService.update(action.recipe).pipe(
        map(() => RecipesActions.updateRecipeSuccess()),
        catchError((error: HttpErrorResponse) => {
          RecipesActions.updateRecipeFail(error);
          return EMPTY
        })
      ))
    )
  );

  updateRecipeSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(RecipesActions.updateRecipeSuccess),
      map(() => RecipesActions.getRecipesCollection())
    )
  );

  deleteRecipe$ = createEffect(() =>
    this.actions$.pipe(
      ofType(RecipesActions.deleteRecipe),
      optimisticUpdate({
        run: (action) => {
          return this.recipesDataService.delete(action.recipe.id).pipe(
            map(() => RecipesActions.deleteRecipeSuccess())
          )
        },
        undoAction: (action, error: HttpErrorResponse) => {
          return RecipesActions.deleteRecipeFail({error, recipe: action.recipe});
        }
      })
    )
  );

  deleteRecipeSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(RecipesActions.deleteRecipeSuccess),
      map(() => RecipesActions.getRecipesCollection())
    )
  );

  constructor(
    private actions$: Actions,
    private recipesDataService: RecipesDataService
  ) {}
}
