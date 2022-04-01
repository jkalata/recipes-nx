import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeleteRecipeComponent } from './delete-recipe/delete-recipe.component';
import { DeleteRecipeUiModule } from '@recipes-nx/delete-recipe/ui';
import { UiConfirmDialogModule } from '@recipes-nx/delete-recipe-ui-confirm-dialog';

@NgModule({
  imports: [CommonModule, DeleteRecipeUiModule, UiConfirmDialogModule],
  declarations: [DeleteRecipeComponent],
  exports: [DeleteRecipeComponent],
})
export class DeleteRecipeFeatureModule {}
