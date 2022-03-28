import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {fetch} from "@nrwl/angular";
import {fromRecipesActions} from "./recipes.actions";
import {RecipesDataService} from "../services/recipes-data.service";
import {HttpErrorResponse} from "@angular/common/http";
import {map} from "rxjs/operators";

@Injectable()
export class RecipesEffects {
  getRecipesCollection$ = createEffect(() => this.actions$.pipe(
    ofType(fromRecipesActions.Types.GetRecipesCollection),
    fetch({
      run: () => {
        return this.recipesDataService.getCollection().pipe(
          map(response => new fromRecipesActions.GetRecipesCollectionSuccess(response))
        )
      },
      onError: (a: fromRecipesActions.GetRecipesCollection, error: HttpErrorResponse) => new fromRecipesActions.GetRecipesCollectionFail(error)
    })
  ))

  getRecipesDetails$ = createEffect(() => this.actions$.pipe(
    ofType(fromRecipesActions.Types.GetRecipeDetails),
    fetch({
      run: (action: fromRecipesActions.GetRecipeDetails) => {
        return this.recipesDataService.getDetails(action.payload).pipe(
          map(response => new fromRecipesActions.GetRecipeDetailsSuccess(response))
        )
      },
      onError: (a: fromRecipesActions.GetRecipeDetails, error: HttpErrorResponse) => new fromRecipesActions.GetRecipeDetailsFail(error)
    })
  ))

  addRecipe$ = createEffect(() => this.actions$.pipe(
    ofType(fromRecipesActions.Types.AddRecipe),
    fetch({
      run: (action: fromRecipesActions.AddRecipe) => {
        return this.recipesDataService.add(action.payload).pipe(
          map(() => new fromRecipesActions.AddRecipeSuccess())
        )
      },
      onError: (a: fromRecipesActions.AddRecipe, error: HttpErrorResponse) => new fromRecipesActions.AddRecipeFail(error)
    })
  ))

  addRecipeSuccess$ = createEffect(() => this.actions$.pipe(
    ofType(fromRecipesActions.Types.AddRecipeSuccess),
    map(() => new fromRecipesActions.GetRecipesCollection())
  ))

  updateRecipe$ = createEffect(() => this.actions$.pipe(
    ofType(fromRecipesActions.Types.UpdateRecipe),
    fetch( {
      run: (action: fromRecipesActions.UpdateRecipe) => {
        return this.recipesDataService.update(action.payload).pipe(
          map(() => new fromRecipesActions.UpdateRecipeSuccess())
        )
      },
      onError: (action: fromRecipesActions.UpdateRecipe, error: HttpErrorResponse) => {
        return new fromRecipesActions.UpdateRecipeFail(error)
      }
    })
  ))

  updateRecipeSuccess$ = createEffect(() => this.actions$.pipe(
    ofType(fromRecipesActions.Types.UpdateRecipeSuccess),
    map(() => new fromRecipesActions.GetRecipesCollection())
  ))

  deleteRecipe$ = createEffect(() => this.actions$.pipe(
    ofType(fromRecipesActions.Types.DeleteRecipe),
    fetch( {
      run: (action: fromRecipesActions.DeleteRecipe) => {
        return this.recipesDataService.delete(action.payload).pipe(
          map(() => new fromRecipesActions.DeleteRecipeSuccess())
        )
      },
      onError: (action: fromRecipesActions.DeleteRecipe, error: HttpErrorResponse) => {
        return new fromRecipesActions.DeleteRecipeFail(error)
      }
    })
  ))

  constructor(
    private actions$: Actions,
    private recipesDataService: RecipesDataService
  ) {}
}
