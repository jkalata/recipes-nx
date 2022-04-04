import { Route, RouterModule } from '@angular/router';
import { FeatureEditRecipeComponent } from './feature-edit-recipe/feature-edit-recipe.component';
import { NgModule } from '@angular/core';
import { EditingSharedUtilsModule } from '@recipes-nx/editing-shared-utils';
import {UnsavedGuard} from "../../../shared/utils/src/guards/unsaved.guard";

const routes: Route[] = [
  {
    path: '',
    component: FeatureEditRecipeComponent,
    canDeactivate: [UnsavedGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), EditingSharedUtilsModule],
  exports: [RouterModule],
})
export class FeatureEditRecipeRoutingModule {}
