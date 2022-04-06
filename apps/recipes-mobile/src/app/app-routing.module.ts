import {Route, RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";

const routes: Route[] = [
  {
    path: '',
    loadChildren: () => import('@recipes-nx/recipes-mobile/shell').then(m => m.RecipesMobileShellModule)
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
