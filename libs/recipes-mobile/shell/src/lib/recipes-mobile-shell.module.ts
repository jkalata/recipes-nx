import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellComponent } from './shell/shell.component';
import { RecipesMobileShellRoutingModule } from './recipes-mobile-shell-routing.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {SharedRecipesListFeatureModule} from "@recipes-nx/shared-recipes-list-feature";
import {SharedHeaderFeatureModule} from "@recipes-nx/shared-header-feature";

@NgModule({
  imports: [
    CommonModule,
    SharedHeaderFeatureModule,
    RecipesMobileShellRoutingModule,
    MatSidenavModule,
    SharedRecipesListFeatureModule,
    MatButtonModule,
    MatIconModule,
  ],
  declarations: [ShellComponent],
})
export class RecipesMobileShellModule {}
