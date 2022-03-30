import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeFormFeatureComponent } from './recipe-form-feature/recipe-form-feature.component';
import { SharedRecipeFormUiModule } from "../../../ui/src/";
import {SharedUiSaveRecipeModule} from "@recipes-nx/shared/ui-save-recipe";

@NgModule({
  imports: [
    CommonModule,
    SharedRecipeFormUiModule,
    SharedUiSaveRecipeModule
  ],
  declarations: [
    RecipeFormFeatureComponent
  ],
  exports: [
    RecipeFormFeatureComponent
  ],
})
export class SharedRecipeFormFeatureModule {}
