import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import {RecipesWebSharedUiAuthorDialogModule} from "@recipes-nx/shared-header-ui-author-dialog";
import {SharedUiHeaderModule} from "@recipes-nx/shared-header-ui";

@NgModule({
  imports: [
    CommonModule,
    SharedUiHeaderModule,
    RecipesWebSharedUiAuthorDialogModule,
  ],
  declarations: [HeaderComponent],
  exports: [HeaderComponent],
})
export class SharedHeaderFeatureModule {}
