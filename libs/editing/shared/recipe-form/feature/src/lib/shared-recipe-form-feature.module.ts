import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeFormFeatureComponent } from './recipe-form-feature/recipe-form-feature.component';
import { EditingSharedRecipeFormUiFormModule } from '@recipes-nx/editing-shared-recipe-form-ui-form';
import { EditingSharedRecipeFormUiSaveRecipeModule } from '@recipes-nx/editing-shared-recipe-form-ui-save-recipe';

@NgModule({
  imports: [
    CommonModule,
    EditingSharedRecipeFormUiFormModule,
    EditingSharedRecipeFormUiSaveRecipeModule,
  ],
  declarations: [RecipeFormFeatureComponent],
  exports: [RecipeFormFeatureComponent],
})
export class SharedRecipeFormFeatureModule {}
