import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {EditRecipeFeatureModule} from "@recipes-nx/edit-recipe/feature";
import {DeleteRecipeFeatureModule} from "@recipes-nx/delete-recipe/feature";
import {PreparationTimePipeModule} from "./pipes/preparation-time.pipe";

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    EditRecipeFeatureModule,
    DeleteRecipeFeatureModule,
    PreparationTimePipeModule
  ],
  declarations: [
    RecipeDetailsComponent
  ],
  exports: [
    RecipeDetailsComponent
  ],
})
export class DetailsUiModule {}
