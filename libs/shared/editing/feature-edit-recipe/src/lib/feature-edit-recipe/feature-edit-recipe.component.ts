import {
  Component,
  OnInit,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
} from '@angular/core';
import { ControlsOf, FormGroup } from '@ngneat/reactive-forms';
import { AddRecipePayload, RecipeModel } from '@recipes-nx/shared-domain';
import { ActivatedRoute, Router } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { BehaviorSubject } from 'rxjs';
import { RecipeFormCreator } from '@recipes-nx/shared/utils';
import { RecipesFacade } from '@recipes-nx/shared-data-access';

@UntilDestroy()
@Component({
  selector: 'recipes-nx-feature-edit-recipe',
  templateUrl: './feature-edit-recipe.component.html',
  styleUrls: ['./feature-edit-recipe.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeatureEditRecipeComponent implements OnInit {
  private editedRecipe!: RecipeModel;

  form: FormGroup<ControlsOf<AddRecipePayload>> | null = null;
  cancelGuard$ = new BehaviorSubject<boolean>(false);

  constructor(
    private recipeFacade: RecipesFacade,
    private recipeFormCreator: RecipeFormCreator,
    private activatedRoute: ActivatedRoute,
    private changeDetector: ChangeDetectorRef,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.listenForIdChanges();
    this.listenForActiveRecipeChanges();
  }

  private listenForIdChanges(): void {
    this.activatedRoute.params
      .pipe(untilDestroyed(this))
      .subscribe((params) => {
        this.recipeFacade.getRecipeDetails(params['id']);
      });
  }

  private listenForActiveRecipeChanges(): void {
    this.recipeFacade.activeRecipe
      .pipe(untilDestroyed(this))
      .subscribe((recipe) => {
        this.initForm(recipe);
      });
  }

  private initForm(recipe: RecipeModel | null): void {
    this.form = null;
    this.changeDetector.markForCheck();
    if (recipe) {
      this.editedRecipe = recipe;
      this.form = this.recipeFormCreator.create(recipe);
      this.changeDetector.markForCheck();
    }
  }

  updateRecipe(): void {
    if (this.form) {
      this.recipeFacade.updateRecipe({
        ...this.form.getRawValue(),
        id: this.editedRecipe.id,
      });
      this.cancelGuard$.next(false);
      this.navigateBackToDetails();
    }
  }

  cancel(): void {
    this.cancelGuard$.next(true);
    this.navigateBackToDetails();
  }

  private navigateBackToDetails(): void {
    this.router.navigate([`${this.editedRecipe.id}`]);
  }
}
