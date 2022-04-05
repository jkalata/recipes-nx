import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipesDataService } from './services/recipes-data.service';
import { StoreModule } from '@ngrx/store';
import { RECIPES_FEATURE_KEY, recipesReducer } from './+state/recipes.reducer';
import { EffectsModule } from '@ngrx/effects';
import { RecipesEffects } from './+state/recipes.effects';
import { RecipesFacade } from './+state/recipes.facade';
import {environment} from "@recipes-nx/shared/environment";

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(RECIPES_FEATURE_KEY, recipesReducer),
    EffectsModule.forFeature([RecipesEffects]),
  ],
  providers: [
    { provide: 'API_URL', useValue: environment.apiURL },
    RecipesDataService,
    RecipesFacade
  ],
})
export class SharedDataAccessModule {}
