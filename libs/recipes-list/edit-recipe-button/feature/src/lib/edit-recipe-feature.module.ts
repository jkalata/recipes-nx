import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditRecipeComponent } from './edit-recipe/edit-recipe.component';
import { EditRecipeUiModule } from '@recipes-nx/recipes-list-edit-recipe-button-ui';

@NgModule({
  imports: [CommonModule, EditRecipeUiModule],
  declarations: [EditRecipeComponent],
  exports: [EditRecipeComponent],
})
export class EditRecipeFeatureModule {}
