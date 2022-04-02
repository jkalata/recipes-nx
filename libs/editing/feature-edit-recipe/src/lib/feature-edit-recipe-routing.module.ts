import { Route, RouterModule } from '@angular/router';
import { FeatureEditRecipeComponent } from './feature-edit-recipe/feature-edit-recipe.component';
import { NgModule } from '@angular/core';
import {EditingSharedRecipeFormUtilsModule} from "@recipes-nx/editing/shared/recipe-form/utils";
import {UnsavedGuard} from "../../../shared/recipe-form/utils/src/guards/unsaved.guard";

const routes: Route[] = [
  {
    path: '',
    component: FeatureEditRecipeComponent,
    canDeactivate: [UnsavedGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), EditingSharedRecipeFormUtilsModule],
  exports: [RouterModule],
})
export class FeatureEditRecipeRoutingModule {}
