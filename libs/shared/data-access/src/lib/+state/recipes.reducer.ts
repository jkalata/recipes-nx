import { RecipeModel } from '@recipes-nx/shared-domain';
import * as fromRecipesActions from './recipes.actions';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { HttpErrorResponse } from '@angular/common/http';
import {createReducer, on} from "@ngrx/store";

export const RECIPES_FEATURE_KEY = 'recipes';

export function selectId(item: RecipeModel): string {
  return item.id;
}

const adapter: EntityAdapter<RecipeModel> = createEntityAdapter<RecipeModel>({
  selectId,
});

export interface RecipesState {
  recipes: EntityState<RecipeModel>;
  activeRecipe: RecipeModel | null;
  loading: boolean;
  error: HttpErrorResponse | null;
}

export const initialRecipesState: RecipesState = {
  recipes: adapter.getInitialState(),
  activeRecipe: null,
  loading: false,
  error: null,
};

export const recipesReducer = createReducer(
  initialRecipesState,
  on(fromRecipesActions.getRecipesCollection, state => ({
    ...state,
    recipes: adapter.getInitialState(),
    loading: true,
    error: null
  })),
  on(fromRecipesActions.getRecipesCollectionFail, (state, {error}) => ({
    ...state,
    loading: false,
    error: error
  })),
  on(fromRecipesActions.getRecipesCollectionSuccess, (state, {recipes}) => ({
    ...state,
    recipes: adapter.addMany(recipes, state.recipes),
    loading: false,
    error: null,
  })),
  on(fromRecipesActions.getRecipeDetails, state => ({
    ...state,
    activeRecipe: null,
    loading: true,
    error: null,
  })),
  on(fromRecipesActions.getRecipeDetailsSuccess, (state, {recipe}) => {
    return {
      ...state,
      activeRecipe: recipe,
      loading: false,
      error: null,
    }
  }),
  on(fromRecipesActions.getRecipeDetailsFail, (state, {error}) => ({
    ...state,
    activeRecipe: null,
    loading: false,
    error: error,
  })),
  on(fromRecipesActions.addRecipe, state => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(fromRecipesActions.addRecipeSuccess,state => ({
    ...state,
    loading: false,
    error: null,
  })),
  on(fromRecipesActions.addRecipeFail,(state, {error}) => ({
    ...state,
    loading: false,
    error: error,
  })),
  on(fromRecipesActions.updateRecipe,state => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(fromRecipesActions.updateRecipeSuccess,state => ({
    ...state,
    loading: false,
    error: null,
  })),
  on(fromRecipesActions.updateRecipeFail,(state, {error}) => ({
    ...state,
    loading: false,
    error: error,
  })),
  on(fromRecipesActions.deleteRecipe,state => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(fromRecipesActions.deleteRecipeSuccess,state => ({
    ...state,
    loading: false,
    error: null,
  })),
  on(fromRecipesActions.deleteRecipeFail,(state, {error}) => ({
    ...state,
    loading: false,
    error: error,
  }))
)


export const { selectAll } = adapter.getSelectors();
