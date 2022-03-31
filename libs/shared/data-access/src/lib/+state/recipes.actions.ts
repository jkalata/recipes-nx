import {createAction, props} from '@ngrx/store';
import {AddRecipePayload} from '@recipes-nx/shared-domain';
import {RecipeModel} from '@recipes-nx/shared-domain';
import {HttpErrorResponse} from '@angular/common/http';

export enum Types {
  GetRecipesCollection = '[Recipes] Get Recipes Collection',
  GetRecipesCollectionFail = '[Recipes] Get Recipes Collection Fail',
  GetRecipesCollectionSuccess = '[Recipes] Get Recipes Collection Success',
  GetRecipeDetails = '[Recipes] Get Recipe Details',
  GetRecipeDetailsFail = '[Recipes] Get Recipe Details Fail',
  GetRecipeDetailsSuccess = '[Recipes] Get Recipe Details Success',
  UpdateRecipe = '[Recipes] Update Recipe',
  UpdateRecipeFail = '[Recipes] Update Recipe Fail',
  UpdateRecipeSuccess = '[Recipes] Update Recipe Success',
  DeleteRecipe = '[Recipes] Delete Recipe',
  DeleteRecipeFail = '[Recipes] Delete Recipe Fail',
  DeleteRecipeSuccess = '[Recipes] Delete Recipe Success',
  AddRecipe = '[Recipes] Add Recipe',
  AddRecipeFail = '[Recipes] Add Recipe Fail',
  AddRecipeSuccess = '[Recipes] Add Recipe Success',
}

export const getRecipesCollection = createAction(
  Types.GetRecipesCollection,
)

export const getRecipesCollectionFail = createAction(
  Types.GetRecipesCollectionFail,
  props<{ error: HttpErrorResponse }>()
)

export const getRecipesCollectionSuccess = createAction(
  Types.GetRecipesCollectionSuccess,
  props<{ recipes: RecipeModel[] }>()
)

export const getRecipeDetails = createAction(
  Types.GetRecipeDetails,
  props<{ id: string }>()
)

export const getRecipeDetailsFail = createAction(
  Types.GetRecipeDetailsFail,
  props<{ error: HttpErrorResponse }>()
)

export const getRecipeDetailsSuccess = createAction(
  Types.GetRecipeDetailsSuccess,
  props<{ recipe: RecipeModel }>()
)

export const updateRecipe = createAction(
  Types.UpdateRecipe,
  props<{ recipe: RecipeModel }>()
)

export const updateRecipeFail = createAction(
  Types.UpdateRecipeFail,
  props<{ error: HttpErrorResponse }>()
)

export const updateRecipeSuccess = createAction(
  Types.UpdateRecipeSuccess,
)

export const deleteRecipe = createAction(
  Types.DeleteRecipe,
  props<{ id: string }>()
)

export const deleteRecipeFail = createAction(
  Types.DeleteRecipeFail,
  props<{ error: HttpErrorResponse }>()
)

export const deleteRecipeSuccess = createAction(
  Types.DeleteRecipeSuccess,
)

export const addRecipe = createAction(
  Types.AddRecipe,
  props<{ recipe: AddRecipePayload }>()
)

export const addRecipeFail = createAction(
  Types.AddRecipeFail,
  props<{ error: HttpErrorResponse }>()
)

export const addRecipeSuccess = createAction(
  Types.AddRecipeSuccess,
)

