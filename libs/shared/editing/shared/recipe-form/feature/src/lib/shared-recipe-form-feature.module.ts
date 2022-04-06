import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeFormFeatureComponent } from './recipe-form-feature/recipe-form-feature.component';
import { SharedEditingSharedRecipeFormUiFormModule } from '@recipes-nx/shared-editing-shared-recipe-form-ui-form';
import { SharedEditingSharedRecipeFormUiSaveRecipeModule } from '@recipes-nx/shared-editing-shared-recipe-form-ui-save-recipe';
import { SharedEditingSharedRecipeFormUiCancelButtonModule } from '@recipes-nx/shared-editing-shared-recipe-form-ui-cancel-button';

@NgModule({
  imports: [
    CommonModule,
    SharedEditingSharedRecipeFormUiFormModule,
    SharedEditingSharedRecipeFormUiSaveRecipeModule,
    SharedEditingSharedRecipeFormUiCancelButtonModule,
  ],
  declarations: [RecipeFormFeatureComponent],
  exports: [RecipeFormFeatureComponent],
})
export class SharedRecipeFormFeatureModule {}
