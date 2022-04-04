import {Component, ChangeDetectionStrategy, Input} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {RecipesFacade} from "../../../../../shared/data-access/src/lib/+state/recipes.facade";
import {Router} from "@angular/router";
import {
  ConfirmDialogComponent
} from "../../../../../shared/ui-confirm-dialog/src/lib/confirm-dialog/confirm-dialog.component";

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
    private dialog: MatDialog,
    private router: Router
  ) { }

  delete(): void {
    this.dialog.open(ConfirmDialogComponent)
      .afterClosed()
      .subscribe(result => {
        if(result){
          this.recipeFacade.deleteRecipe(this.id);
          this.router.navigate([''])
        }
      })
  }

}
