import {createFeatureSelector, createSelector} from "@ngrx/store";
import {RECIPES_FEATURE_KEY, RecipesState, selectAll} from "./recipes.reducer";

const getRecipesState = createFeatureSelector<RecipesState>(RECIPES_FEATURE_KEY);

const getRecipeCollectionEntityState = createSelector(
  getRecipesState,
  state => state.recipes
);

const getRecipesCollection = createSelector(
  getRecipeCollectionEntityState,
  selectAll
);

const getActiveRecipe = createSelector(
  getRecipesState,
  state => state.activeRecipe
)

const getRecipesLoading = createSelector(
  getRecipesState,
  state => state.loading
)

const getRecipesError = createSelector(
  getRecipesState,
  state => state.error
)

export const recipesQuery = {
  getRecipesCollection,
  getActiveRecipe,
  getRecipesError,
  getRecipesLoading
}
