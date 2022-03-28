import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatDialogModule} from "@angular/material/dialog";
import {
  RecipesListFeatureRoutingModule,
} from "./recipes-list-feature-routing.module";
import {RecipesListComponent} from "./recipes-list/recipes-list.component";
import {DataAccessModule} from "@recipes-nx/data-access";
import {RecipesListUiModule} from "@recipes-nx/recipes-list/ui";

@NgModule({
  imports: [
    CommonModule,
    RecipesListUiModule,
    RecipesListFeatureRoutingModule,
    DataAccessModule,
    MatDialogModule,
  ],
  declarations: [
    RecipesListComponent
  ],
})
export class RecipesListFeatureModule {}
