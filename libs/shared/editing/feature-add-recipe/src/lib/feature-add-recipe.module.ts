import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureAddRecipeComponent } from './feature-add-recipe/feature-add-recipe.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FeatureAddRecipeRoutingModule } from './feature-add-recipe-routing.module';
import { SharedRecipeFormFeatureModule } from '../../../shared/recipe-form/feature/src';
import { RecipeFormCreator } from '@recipes-nx/shared/utils';

@NgModule({
  imports: [
    CommonModule,
    SharedRecipeFormFeatureModule,
    ReactiveFormsModule,
    FeatureAddRecipeRoutingModule,
  ],
  providers: [RecipeFormCreator],
  declarations: [FeatureAddRecipeComponent],
  exports: [FeatureAddRecipeComponent],
})
export class FeatureAddRecipeModule {}
