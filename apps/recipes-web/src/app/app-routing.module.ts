import {NgModule} from "@angular/core";
import {Route, RouterModule} from "@angular/router";

const routes: Route[] = [
  {
    path: '',
    loadChildren: () => import("@recipes-nx/shell").then(m => m.RecipesWebShellModule)
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
