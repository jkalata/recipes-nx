import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddIngredientButtonComponent } from './add-ingredient-button/add-ingredient-button.component';
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";

@NgModule({
  imports: [CommonModule, MatButtonModule, MatIconModule],
  declarations: [
    AddIngredientButtonComponent
  ],
  exports: [
    AddIngredientButtonComponent
  ],
})
export class SharedUiAddIngredientButtonModule {}
