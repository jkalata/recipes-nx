import {Route, RouterModule} from "@angular/router";
import {FeatureAddRecipeComponent} from "./feature-add-recipe/feature-add-recipe.component";
import {NgModule} from "@angular/core";

const routes: Route[] = [
  {
    path: '',
    component: FeatureAddRecipeComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class FeatureAddRecipeRoutingModule {}
