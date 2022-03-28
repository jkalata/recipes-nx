import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipesListComponent } from './recipes-list/recipes-list.component';
import {DeleteRecipeFeatureModule} from "@recipes-nx/delete-recipe/feature";
import {EditRecipeFeatureModule} from "@recipes-nx/edit-recipe/feature";
import {MatCardModule} from "@angular/material/card";

@NgModule({
  imports: [CommonModule, DeleteRecipeFeatureModule, EditRecipeFeatureModule, MatCardModule],
  declarations: [
    RecipesListComponent
  ],
  exports: [RecipesListComponent]
})
export class RecipesListUiModule {}
