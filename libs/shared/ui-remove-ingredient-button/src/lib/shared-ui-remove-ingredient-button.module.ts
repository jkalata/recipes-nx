import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RemoveIngredientButtonComponent } from './remove-ingredient-button/remove-ingredient-button.component';
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";

@NgModule({
  imports: [CommonModule, MatButtonModule, MatIconModule],
  declarations: [
    RemoveIngredientButtonComponent
  ],
  exports: [
    RemoveIngredientButtonComponent
  ],
})
export class SharedUiRemoveIngredientButtonModule {}
