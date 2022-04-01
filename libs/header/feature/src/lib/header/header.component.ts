import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {AuthorDialogComponent} from "../../../../ui-author-dialog/src/lib/author-dialog/author-dialog.component";

@Component({
  selector: 'recipes-header-feature',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {

  constructor(private dialog: MatDialog) { }

  openAuthorDialog(): void {
    this.dialog.open(AuthorDialogComponent)
  }

}
