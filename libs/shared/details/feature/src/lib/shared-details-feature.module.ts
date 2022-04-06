import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { SharedDetailsFeatureRoutingModule } from './details-feature-routing.module';
import { SharedDataAccessModule } from '@recipes-nx/shared-data-access';
import { SharedDetailsUiModule } from '@recipes-nx/shared-details-ui';

@NgModule({
  imports: [
    CommonModule,
    SharedDetailsUiModule,
    SharedDataAccessModule,
    SharedDetailsFeatureRoutingModule,
  ],
  declarations: [RecipeDetailsComponent],
})
export class SharedDetailsFeatureModule {}
