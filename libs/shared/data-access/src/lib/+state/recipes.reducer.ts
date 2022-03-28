import { RecipeModel } from '@recipes-nx/shared-domain';
import { fromRecipesActions } from './recipes.actions';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { HttpErrorResponse } from '@angular/common/http';

export const RECIPES_FEATURE_KEY = 'recipes';
interface RepositoryEntityState extends EntityState<RecipeModel> {}

export function selectId(item: RecipeModel): string {
  return item._id;
}

const adapter: EntityAdapter<RecipeModel> = createEntityAdapter<RecipeModel>({
  selectId,
});

export interface RecipesState {
  recipes: RepositoryEntityState;
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

export function recipesReducer(
  state = initialRecipesState,
  action: fromRecipesActions.RecipesActionsUnion
): RecipesState {
  switch (action.type) {
    case fromRecipesActions.Types.GetRecipesCollection: {
      return {
        ...state,
        recipes: adapter.getInitialState(),
        loading: true,
        error: null,
      };
    }

    case fromRecipesActions.Types.GetRecipesCollectionSuccess: {
      return {
        ...state,
        recipes: adapter.addMany(action.payload, state.recipes),
        loading: false,
        error: null,
      };
    }

    case fromRecipesActions.Types.GetRecipesCollectionFail: {
      return {
        ...state,
        recipes: adapter.getInitialState(),
        loading: false,
        error: action.payload,
      };
    }

    case fromRecipesActions.Types.GetRecipeDetails: {
      return {
        ...state,
        activeRecipe: null,
        loading: true,
        error: null,
      };
    }

    case fromRecipesActions.Types.GetRecipeDetailsSuccess: {
      return {
        ...state,
        activeRecipe: action.payload,
        loading: false,
        error: null,
      };
    }

    case fromRecipesActions.Types.GetRecipeDetailsFail: {
      return {
        ...state,
        activeRecipe: null,
        loading: false,
        error: action.payload,
      };
    }

    case fromRecipesActions.Types.AddRecipe: {
      return {
        ...state,
        recipes: adapter.getInitialState(),
        loading: true,
        error: null,
      };
    }

    case fromRecipesActions.Types.AddRecipeSuccess: {
      return {
        ...state,
        loading: false,
        error: null,
      };
    }

    case fromRecipesActions.Types.AddRecipeFail: {
      return {
        ...state,
        recipes: adapter.getInitialState(),
        loading: false,
        error: action.payload,
      };
    }

    case fromRecipesActions.Types.UpdateRecipe: {
      return {
        ...state,
        recipes: adapter.getInitialState(),
        loading: true,
        error: null,
      };
    }

    case fromRecipesActions.Types.UpdateRecipeSuccess: {
      return {
        ...state,
        loading: false,
        error: null,
      };
    }

    case fromRecipesActions.Types.UpdateRecipeFail: {
      return {
        ...state,
        recipes: adapter.getInitialState(),
        loading: false,
        error: action.payload,
      };
    }

    case fromRecipesActions.Types.DeleteRecipe: {
      return {
        ...state,
        recipes: adapter.getInitialState(),
        loading: true,
        error: null,
      };
    }

    case fromRecipesActions.Types.DeleteRecipeSuccess: {
      return {
        ...state,
        loading: false,
        error: null,
      };
    }

    case fromRecipesActions.Types.DeleteRecipeFail: {
      return {
        ...state,
        recipes: adapter.getInitialState(),
        loading: false,
        error: action.payload,
      };
    }

    default: {
      return state;
    }
  }
}

export const { selectAll } = adapter.getSelectors();
