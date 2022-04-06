import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { ShellComponent } from './shell/shell.component';

const routes: Route[] = [
  {
    path: '',
    component: ShellComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('@recipes-nx/shared-recipes-list-feature').then(
            (m) => m.SharedRecipesListFeatureModule
          ),
      },
      {
        path: 'add',
        loadChildren: () =>
          import('@recipes-nx/shared-editing-feature-add-recipe').then(
            (m) => m.FeatureAddRecipeModule
          ),
      },
      {
        path: ':id/edit',
        loadChildren: () =>
          import('@recipes-nx/shared-editing-feature-edit-recipe').then(
            (m) => m.FeatureEditRecipeModule
          ),
      },
      {
        path: ':id',
        loadChildren: () =>
          import('@recipes-nx/shared-details-feature').then(
            (m) => m.SharedDetailsFeatureModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecipesMobileShellRoutingModule {}
