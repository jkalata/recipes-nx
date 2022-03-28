import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipesComponent } from './recipes/recipes.component';
import {RecipesWebShellRoutingModule} from "./shell-routing.module";
import {RecipesWebSharedHeaderFeatureModule} from "@recipes-nx/header/feature";
@NgModule({
  imports: [
    CommonModule,
    RecipesWebSharedHeaderFeatureModule,
    RecipesWebShellRoutingModule
  ],
  declarations: [
    RecipesComponent
  ],
  exports: [
    RecipesComponent
  ]
})
export class RecipesWebShellModule {}
