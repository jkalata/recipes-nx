import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { AddRecipeUiModule } from '@recipes-nx/shared-recipes-list-add-recipe-button-ui';

@NgModule({
  imports: [CommonModule, AddRecipeUiModule],
  declarations: [AddRecipeComponent],
  exports: [AddRecipeComponent],
})
export class AddRecipeFeatureModule {}
