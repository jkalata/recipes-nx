import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipesListComponent } from './recipes-list/recipes-list.component';
import { SharedRecipesListDeleteRecipeButtonFeatureModule } from '@recipes-nx/shared-recipes-list-delete-recipe-button-feature';
import { EditRecipeFeatureModule } from '@recipes-nx/shared-recipes-list-edit-recipe-button-feature';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  imports: [
    CommonModule,
    SharedRecipesListDeleteRecipeButtonFeatureModule,
    EditRecipeFeatureModule,
    MatCardModule,
  ],
  declarations: [RecipesListComponent],
  exports: [RecipesListComponent],
})
export class SharedRecipesListUiModule {}
