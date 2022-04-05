import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ControlsOf, FormGroup } from '@ngneat/reactive-forms';
import { AddRecipePayload } from '@recipes-nx/shared-domain';
import { Router } from '@angular/router';
import {BehaviorSubject} from "rxjs";
import {RecipeFormCreator} from "@recipes-nx/shared/utils";
import {RecipesFacade} from "@recipes-nx/shared-data-access";

@Component({
  selector: 'recipes-nx-feature-add-recipe',
  templateUrl: './feature-add-recipe.component.html',
  styleUrls: ['./feature-add-recipe.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeatureAddRecipeComponent implements OnInit {
  form!: FormGroup<ControlsOf<AddRecipePayload>>;
  cancelGuard$ = new BehaviorSubject<boolean>(false);

  constructor(
    private recipeFacade: RecipesFacade,
    private router: Router,
    private recipeFormCreator: RecipeFormCreator
  ) {}

  ngOnInit(): void {
    this.form = this.initEmptyForm();
  }

  private initEmptyForm(): FormGroup<ControlsOf<AddRecipePayload>> {
    return this.recipeFormCreator.create();
  }

  addRecipe(): void {
    this.recipeFacade.addRecipe(this.form.getRawValue());
    this.cancelGuard$.next(false);
    this.navigateBack()
  }

  cancel(): void {
    this.cancelGuard$.next(true);
    this.navigateBack();
  }

  private navigateBack(): void {
    this.router.navigate(['']);
  }
}
