import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import {AddRecipeUiModule} from "@recipes-nx/add-recipe/ui";

@NgModule({
  imports: [CommonModule, AddRecipeUiModule],
  declarations: [
    AddRecipeComponent
  ],
  exports: [
    AddRecipeComponent
  ],
})
export class AddRecipeFeatureModule {}
