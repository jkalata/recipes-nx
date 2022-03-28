import {Route, RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {RecipeDetailsComponent} from "./recipe-details/recipe-details.component";

const routes: Route[] = [
  {
    path: '',
    component: RecipeDetailsComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailsFeatureRoutingModule {}
