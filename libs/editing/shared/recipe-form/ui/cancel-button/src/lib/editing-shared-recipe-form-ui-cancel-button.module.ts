import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CancelButtonComponent} from './cancel-button/cancel-button.component';
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";

@NgModule({
  imports: [CommonModule, MatButtonModule, MatIconModule],
  declarations: [
    CancelButtonComponent
  ],
  exports: [
    CancelButtonComponent
  ],
})
export class EditingSharedRecipeFormUiCancelButtonModule {
}
