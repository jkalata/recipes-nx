import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { RecipeModel } from '@recipes-nx/shared-domain';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { RecipesFacade } from '@recipes-nx/shared-data-access';

@UntilDestroy()
@Component({
  selector: 'recipes-nx-recipe-details-feature',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecipeDetailsComponent {
  recipe$: Observable<RecipeModel | null> = this.recipeFacade.activeRecipe;

  constructor(
    private activatedRoute: ActivatedRoute,
    private recipeFacade: RecipesFacade
  ) {
    this.listenForIdChanges();
  }

  private listenForIdChanges(): void {
    this.activatedRoute.params
      .pipe(untilDestroyed(this))
      .subscribe((params) => {
        this.recipeFacade.getRecipeDetails(params['id']);
      });
  }
}
