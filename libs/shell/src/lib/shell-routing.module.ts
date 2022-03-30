import {NgModule} from "@angular/core";
import {Route, RouterModule} from "@angular/router";
import {RecipesComponent} from "./recipes/recipes.component";

const routes: Route[] = [
  {
    path: '',
    component: RecipesComponent,
    children: [
      {
        path: 'add',
        loadChildren: () => import('@recipes-nx/feature-add-recipe').then(m => m.FeatureAddRecipeModule),
      },
      {
        path: ':id',
        loadChildren: () =>
          import('@recipes-nx/details/feature').then(
            (m) => m.DetailsFeatureModule
          ),
      },

    ],
  }
]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecipesWebShellRoutingModule{}
