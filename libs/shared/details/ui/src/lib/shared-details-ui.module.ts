import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { EditRecipeFeatureModule } from '@recipes-nx/shared-recipes-list-edit-recipe-button-feature';
import { SharedRecipesListDeleteRecipeButtonFeatureModule } from '@recipes-nx/shared-recipes-list-delete-recipe-button-feature';
import { PreparationTimePipeModule } from './pipes/preparation-time.pipe';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    EditRecipeFeatureModule,
    SharedRecipesListDeleteRecipeButtonFeatureModule,
    PreparationTimePipeModule,
  ],
  declarations: [RecipeDetailsComponent],
  exports: [RecipeDetailsComponent],
})
export class SharedDetailsUiModule {}
