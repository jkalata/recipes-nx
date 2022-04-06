import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { SharedRecipesListFeatureRoutingModule } from './recipes-list-feature-routing.module';
import { RecipesListComponent } from './recipes-list/recipes-list.component';
import { SharedDataAccessModule } from '@recipes-nx/shared-data-access';
import { AddRecipeFeatureModule } from '@recipes-nx/shared-recipes-list-add-recipe-button-feature';
import { SharedRecipesListSearchBoxFeatureModule } from '@recipes-nx/shared-recipes-list-search-box-feature';
import {SharedRecipesListUiModule} from "@recipes-nx/shared-recipes-list-ui";

@NgModule({
  imports: [
    CommonModule,
    SharedRecipesListUiModule,
    SharedRecipesListFeatureRoutingModule,
    SharedDataAccessModule,
    MatDialogModule,
    AddRecipeFeatureModule,
    SharedRecipesListSearchBoxFeatureModule,
  ],
  declarations: [RecipesListComponent],
  exports: [RecipesListComponent],
})
export class SharedRecipesListFeatureModule {}
