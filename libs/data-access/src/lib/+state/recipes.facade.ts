import {Injectable} from "@angular/core";
import {select, Store} from "@ngrx/store";
import {RecipesState} from "./recipes.reducer";
import {recipesQuery} from "./recipes.selector";
import {RecipeModel} from "@recipes-nx/domain";
import {fromRecipesActions} from "./recipes.actions";
import {AddRecipePayload} from "@recipes-nx/domain";

@Injectable()
export class RecipesFacade {

  constructor(private store: Store<RecipesState>) {}

  recipesCollection = this.store.pipe(select(recipesQuery.getRecipesCollection));
  activeRecipe = this.store.pipe(select(recipesQuery.getActiveRecipe))
  loading = this.store.pipe(select(recipesQuery.getRecipesLoading));
  error = this.store.pipe(select(recipesQuery.getRecipesError))

  getRecipesCollection(): void {
    this.store.dispatch(new fromRecipesActions.GetRecipesCollection())
  }

  getRecipeDetails(id: string): void {
    this.store.dispatch(new fromRecipesActions.GetRecipeDetails(id))
  }

  addRecipe(body: AddRecipePayload): void {
    this.store.dispatch(new fromRecipesActions.AddRecipe(body))
  }

  updateRecipe(body: RecipeModel): void {
    this.store.dispatch(new fromRecipesActions.UpdateRecipe(body))
  }

  deleteRecipe(id: string): void {
    this.store.dispatch(new fromRecipesActions.DeleteRecipe(id))
  }
}
