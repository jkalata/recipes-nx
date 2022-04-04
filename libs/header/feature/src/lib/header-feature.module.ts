import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipesWebSharedUiHeaderModule } from '../../../ui/src';
import { HeaderComponent } from './header/header.component';
import { RecipesWebSharedUiAuthorDialogModule } from '@recipes-nx/header-ui-author-dialog';

@NgModule({
  imports: [
    CommonModule,
    RecipesWebSharedUiHeaderModule,
    RecipesWebSharedUiAuthorDialogModule,
  ],
  declarations: [HeaderComponent],
  exports: [HeaderComponent],
})
export class RecipesWebSharedHeaderFeatureModule {}
