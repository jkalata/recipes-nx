import {NgModule} from "@angular/core";
import {Route, RouterModule} from "@angular/router";
import {RecipesComponent} from "./recipes/recipes.component";

const routes: Route[] = [
  {
    path: '',
    component: RecipesComponent,
  }
]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecipesWebShellRoutingModule{}
