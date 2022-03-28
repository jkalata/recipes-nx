import {Component, ChangeDetectionStrategy, Input} from '@angular/core';
import {RecipesFacade} from "../../../../../data-access/src/lib/+state/recipes.facade";
import {MatDialog} from "@angular/material/dialog";
import {ConfirmDialogComponent} from "../../../../../ui-confirm-dialog/src/lib/confirm-dialog/confirm-dialog.component";

@Component({
  selector: 'recipes-nx-delete-recipe',
  templateUrl: './delete-recipe.component.html',
  styleUrls: ['./delete-recipe.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DeleteRecipeComponent {

  @Input() id: string = "";

  constructor(
    private recipeFacade: RecipesFacade,
    private dialog: MatDialog
  ) { }

  delete(): void {
    this.dialog.open(ConfirmDialogComponent)
      .afterClosed()
      .subscribe(result => {
        if(result){
          this.recipeFacade.deleteRecipe(this.id)
        }
      })
  }

}
