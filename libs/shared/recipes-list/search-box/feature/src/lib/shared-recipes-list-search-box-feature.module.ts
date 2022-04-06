import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBoxFeatureComponent } from './search-box-feature/search-box-feature.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {SharedRecipesListSearchBoxUiModule} from "@recipes-nx/shared-recipes-list-search-box-ui";

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    SharedRecipesListSearchBoxUiModule,
  ],
  declarations: [SearchBoxFeatureComponent],
  exports: [SearchBoxFeatureComponent],
})
export class SharedRecipesListSearchBoxFeatureModule {}
