import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { RecipesState } from './recipes.reducer';
import { recipesQuery } from './recipes.selector';
import { RecipeModel } from '@recipes-nx/shared-domain';
import * as fromRecipesActions from './recipes.actions';
import { AddRecipePayload } from '@recipes-nx/shared-domain';

@Injectable()
export class RecipesFacade {
  constructor(private store: Store<RecipesState>) {}

  recipesCollection = this.store.pipe(
    select(recipesQuery.getRecipesCollection)
  );
  activeRecipe = this.store.pipe(select(recipesQuery.getActiveRecipe));
  loading = this.store.pipe(select(recipesQuery.getRecipesLoading));
  error = this.store.pipe(select(recipesQuery.getRecipesError));

  getRecipesCollection(): void {
    this.store.dispatch(fromRecipesActions.getRecipesCollection());
  }

  getRecipeDetails(id: string): void {
    this.store.dispatch(fromRecipesActions.getRecipeDetails({id}));
  }

  addRecipe(body: AddRecipePayload): void {
    this.store.dispatch(fromRecipesActions.addRecipe({recipe: body}));
  }

  updateRecipe(body: RecipeModel): void {
    this.store.dispatch(fromRecipesActions.updateRecipe({recipe: body}));
  }

  deleteRecipe(id: string): void {
    this.store.dispatch(fromRecipesActions.deleteRecipe({id}));
  }
}
