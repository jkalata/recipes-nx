import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { RecipesFacade } from '@recipes-nx/shared-data-access';
import { ConfirmDialogComponent } from '@recipes-nx/shared-ui-confirm-dialog';
import {RecipeModel} from "@recipes-nx/shared-domain";

@Component({
  selector: 'recipes-nx-delete-recipe',
  templateUrl: './delete-recipe.component.html',
  styleUrls: ['./delete-recipe.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DeleteRecipeComponent {
  @Input() recipe: RecipeModel | null = null;

  constructor(
    private recipeFacade: RecipesFacade,
    private dialog: MatDialog,
    private router: Router
  ) {}

  delete(): void {
    this.dialog
      .open(ConfirmDialogComponent)
      .afterClosed()
      .subscribe((result) => {
        if (result && this.recipe) {
          this.recipeFacade.deleteRecipe(this.recipe);
          this.router.navigate(['']);
        }
      });
  }
}
