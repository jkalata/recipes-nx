import { Component, ChangeDetectionStrategy } from '@angular/core';
import {RecipesFacade} from "@recipes-nx/shared-data-access";
import {Observable} from "rxjs";

@Component({
  selector: 'recipes-nx-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecipesComponent {
  loading$: Observable<boolean> = this.recipesFacade.loading;
  constructor(private recipesFacade: RecipesFacade) {
  }
}
