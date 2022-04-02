import { Route, RouterModule } from '@angular/router';
import { FeatureAddRecipeComponent } from './feature-add-recipe/feature-add-recipe.component';
import { NgModule } from '@angular/core';
import {UnsavedGuard} from "../../../shared/recipe-form/utils/src/guards/unsaved.guard";
import {EditingSharedRecipeFormUtilsModule} from "@recipes-nx/editing/shared/recipe-form/utils";

const routes: Route[] = [
  {
    path: '',
    component: FeatureAddRecipeComponent,
    canDeactivate: [UnsavedGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), EditingSharedRecipeFormUtilsModule],
  exports: [RouterModule],
})
export class FeatureAddRecipeRoutingModule {}
