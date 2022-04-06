import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeleteRecipeComponent } from './delete-recipe/delete-recipe.component';
import { SharedRecipesListDeleteRecipeButtonUiModule } from '@recipes-nx/shared-recipes-list-delete-recipe-button-ui';
import { UiConfirmDialogModule } from '@recipes-nx/shared-ui-confirm-dialog';

@NgModule({
  imports: [
    CommonModule,
    SharedRecipesListDeleteRecipeButtonUiModule,
    UiConfirmDialogModule,
  ],
  declarations: [DeleteRecipeComponent],
  exports: [DeleteRecipeComponent],
})
export class SharedRecipesListDeleteRecipeButtonFeatureModule {}
