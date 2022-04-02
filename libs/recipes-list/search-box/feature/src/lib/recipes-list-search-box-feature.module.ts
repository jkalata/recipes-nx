import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBoxFeatureComponent } from './search-box-feature/search-box-feature.component';
import {RecipesListSearchBoxUiModule} from "@recipes-nx/recipes-list/search-box/ui";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RecipesListSearchBoxUiModule,
  ],
  declarations: [
    SearchBoxFeatureComponent
  ],
  exports: [
    SearchBoxFeatureComponent
  ],
})
export class RecipesListSearchBoxFeatureModule {}
