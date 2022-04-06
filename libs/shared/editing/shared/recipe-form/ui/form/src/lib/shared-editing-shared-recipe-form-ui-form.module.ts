import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeFormComponent } from './recipe-form/recipe-form.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { ErrorTailorModule } from '@ngneat/error-tailor';
import { SharedUiRemoveIngredientButtonModule } from '../../../remove-ingredient-button/src';
import {
  SharedUiAddIngredientButtonModule
} from "@recipes-nx/shared-editing-shared-recipe-form-ui-add-ingredient-button";

@NgModule({
  imports: [
    CommonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    ErrorTailorModule,
    SharedUiAddIngredientButtonModule,
    SharedUiRemoveIngredientButtonModule,
  ],
  declarations: [RecipeFormComponent],
  exports: [RecipeFormComponent],
})
export class SharedEditingSharedRecipeFormUiFormModule {}
