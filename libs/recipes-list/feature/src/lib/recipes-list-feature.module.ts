import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { RecipesListFeatureRoutingModule } from './recipes-list-feature-routing.module';
import { RecipesListComponent } from './recipes-list/recipes-list.component';
import { SharedDataAccessModule } from '@recipes-nx/shared-data-access';
import { RecipesListUiModule } from '@recipes-nx/recipes-list/ui';
import { AddRecipeFeatureModule } from '@recipes-nx/recipes-list-add-recipe-button-feature';

@NgModule({
  imports: [
    CommonModule,
    RecipesListUiModule,
    RecipesListFeatureRoutingModule,
    SharedDataAccessModule,
    MatDialogModule,
    AddRecipeFeatureModule,
  ],
  declarations: [RecipesListComponent],
  exports: [RecipesListComponent],
})
export class RecipesListFeatureModule {}
