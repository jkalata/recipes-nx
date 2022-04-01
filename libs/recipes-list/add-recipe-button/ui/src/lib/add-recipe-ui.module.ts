import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddRecipeButtonComponent } from './add-recipe-button/add-recipe-button.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [CommonModule, MatButtonModule, MatIconModule],
  declarations: [AddRecipeButtonComponent],
  exports: [AddRecipeButtonComponent],
})
export class AddRecipeUiModule {}
