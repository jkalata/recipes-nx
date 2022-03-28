import { Component } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'recipes-nx-author-dialog',
  templateUrl: './author-dialog.component.html',
  styleUrls: ['./author-dialog.component.scss']
})
export class AuthorDialogComponent {

  constructor(private dialogRef: MatDialogRef<AuthorDialogComponent>) {}

  close(result: boolean): void {
    this.dialogRef.close(result)
  }

}
