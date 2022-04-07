import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipesWebShellRoutingModule } from './recipes-web-shell-routing.module';
import { SharedHeaderFeatureModule } from '@recipes-nx/shared-header-feature';
import { SharedRecipesListFeatureModule } from '@recipes-nx/shared-recipes-list-feature';
import { SharedUiLoaderModule } from '@recipes-nx/shared-ui-loader';
@NgModule({
  imports: [
    CommonModule,
    SharedHeaderFeatureModule,
    RecipesWebShellRoutingModule,
    SharedRecipesListFeatureModule,
    SharedUiLoaderModule,
  ],
  declarations: [RecipesComponent],
  exports: [RecipesComponent],
})
export class RecipesWebShellModule {}
