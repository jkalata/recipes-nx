import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureEditRecipeComponent } from './feature-edit-recipe/feature-edit-recipe.component';
import {ReactiveFormsModule} from "@angular/forms";
import {FeatureEditRecipeRoutingModule} from "./feature-edit-recipe-routing.module";
import {SharedRecipeFormFeatureModule} from "@recipes-nx/shared/recipe-form/feature";

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FeatureEditRecipeRoutingModule,
    SharedRecipeFormFeatureModule
  ],
  declarations: [
    FeatureEditRecipeComponent
  ],
  exports: [
    FeatureEditRecipeComponent
  ],
})
export class FeatureEditRecipeModule {}
