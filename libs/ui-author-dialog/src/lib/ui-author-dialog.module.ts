import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorDialogComponent } from './author-dialog/author-dialog.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  imports: [CommonModule, MatDialogModule, MatButtonModule],
  declarations: [
    AuthorDialogComponent
  ],
  entryComponents: [AuthorDialogComponent]
})
export class RecipesWebSharedUiAuthorDialogModule {}
