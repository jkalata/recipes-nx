import {Route, RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {RecipesListComponent} from "./recipes-list/recipes-list.component";

const routes: Route[] = [
  {
    path: '',
    component: RecipesListComponent,
    children: [
      {
        path: ':id',
        loadChildren: () => import("@recipes-nx/details/feature").then(m => m.DetailsFeatureModule)
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class RecipesListFeatureRoutingModule {}
