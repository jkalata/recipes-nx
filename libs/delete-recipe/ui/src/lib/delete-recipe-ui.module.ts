import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeleteRecipeComponent } from './delete-recipe/delete-recipe.component';
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";

@NgModule({
  imports: [CommonModule, MatButtonModule, MatIconModule],
  declarations: [
    DeleteRecipeComponent
  ],
  exports: [
    DeleteRecipeComponent
  ],
})
export class DeleteRecipeUiModule {}
