import { Route, RouterModule } from '@angular/router';
import { FeatureAddRecipeComponent } from './feature-add-recipe/feature-add-recipe.component';
import { NgModule } from '@angular/core';
import { EditingSharedUtilsModule } from '@recipes-nx/editing-shared-utils';
import {UnsavedGuard} from "../../../shared/utils/src/guards/unsaved.guard";

const routes: Route[] = [
  {
    path: '',
    component: FeatureAddRecipeComponent,
    canDeactivate: [UnsavedGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), EditingSharedUtilsModule],
  exports: [RouterModule],
})
export class FeatureAddRecipeRoutingModule {}
