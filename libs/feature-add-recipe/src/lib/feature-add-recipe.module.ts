import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureAddRecipeComponent } from './feature-add-recipe/feature-add-recipe.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FeatureAddRecipeRoutingModule } from './feature-add-recipe-routing.module';
import { SharedUiSaveRecipeModule } from '@recipes-nx/shared/ui-save-recipe';
import {SharedRecipeFormFeatureModule} from "@recipes-nx/shared/recipe-form/feature";

@NgModule({
  imports: [
    CommonModule,
    SharedRecipeFormFeatureModule,
    ReactiveFormsModule,
    FeatureAddRecipeRoutingModule,
    SharedUiSaveRecipeModule,
  ],
  declarations: [FeatureAddRecipeComponent],
  exports: [FeatureAddRecipeComponent],
})
export class FeatureAddRecipeModule {}
