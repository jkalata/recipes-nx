import {Route, RouterModule} from "@angular/router";
import {FeatureEditRecipeComponent} from "./feature-edit-recipe/feature-edit-recipe.component";
import {NgModule} from "@angular/core";

const routes: Route[] = [
  {
    path: '',
    component: FeatureEditRecipeComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureEditRecipeRoutingModule {}
