import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SaveRecipeButtonComponent } from './save-recipe-button/save-recipe-button.component';
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";

@NgModule({
  imports: [CommonModule, MatButtonModule, MatIconModule],
  declarations: [
    SaveRecipeButtonComponent
  ],
  exports: [
    SaveRecipeButtonComponent
  ],
})
export class SharedUiSaveRecipeModule {}
