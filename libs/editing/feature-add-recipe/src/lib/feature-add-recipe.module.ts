import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureAddRecipeComponent } from './feature-add-recipe/feature-add-recipe.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FeatureAddRecipeRoutingModule } from './feature-add-recipe-routing.module';
import {SharedRecipeFormFeatureModule} from "../../../shared/recipe-form/feature/src";

@NgModule({
  imports: [
    CommonModule,
    SharedRecipeFormFeatureModule,
    ReactiveFormsModule,
    FeatureAddRecipeRoutingModule,
  ],
  declarations: [FeatureAddRecipeComponent],
  exports: [FeatureAddRecipeComponent],
})
export class FeatureAddRecipeModule {}
