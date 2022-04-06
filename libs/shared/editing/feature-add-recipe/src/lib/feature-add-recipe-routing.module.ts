import { Route, RouterModule } from '@angular/router';
import { FeatureAddRecipeComponent } from './feature-add-recipe/feature-add-recipe.component';
import { NgModule } from '@angular/core';
import { SharedEditingSharedUtilsModule } from '@recipes-nx/shared-editing-shared-utils';
import { UnsavedGuard } from '../../../shared/utils/src/guards/unsaved.guard';

const routes: Route[] = [
  {
    path: '',
    component: FeatureAddRecipeComponent,
    canDeactivate: [UnsavedGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), SharedEditingSharedUtilsModule],
  exports: [RouterModule],
})
export class FeatureAddRecipeRoutingModule {}
