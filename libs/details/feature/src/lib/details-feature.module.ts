import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { DetailsFeatureRoutingModule } from './details-feature-routing.module';
import {SharedDataAccessModule} from "@recipes-nx/shared-data-access";
import {DetailsUiModule} from "@recipes-nx/details/ui";

@NgModule({
  imports: [
    CommonModule,
    DetailsUiModule,
    SharedDataAccessModule,
    DetailsFeatureRoutingModule,
  ],
  declarations: [RecipeDetailsComponent],
})
export class DetailsFeatureModule {}
