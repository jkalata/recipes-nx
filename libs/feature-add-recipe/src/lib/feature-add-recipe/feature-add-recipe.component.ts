import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core';
import {ControlsOf, FormGroup} from "@ngneat/reactive-forms";
import {AddRecipePayload} from "@recipes-nx/shared-domain";
import {RecipeFormCreator} from "../../../../shared/utils/src/recipe-form-creator/recipe-form-creator";
import {RecipesFacade} from "../../../../shared/data-access/src/lib/+state/recipes.facade";
import {Router} from "@angular/router";

@Component({
  selector: 'recipes-nx-feature-add-recipe',
  templateUrl: './feature-add-recipe.component.html',
  styleUrls: ['./feature-add-recipe.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeatureAddRecipeComponent implements OnInit {
  form!: FormGroup<ControlsOf<AddRecipePayload>>;

  constructor(
    private recipeFacade: RecipesFacade,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.form = this.initEmptyForm();
  }

  private initEmptyForm(): FormGroup<ControlsOf<AddRecipePayload>> {
    return new RecipeFormCreator().create()
  }

  addRecipe(): void {
    this.recipeFacade.addRecipe(this.form.getRawValue())
    this.router.navigate([''])
  }

}
