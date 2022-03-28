import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import {RecipesFacade} from "../../../../../shared/data-access/src/lib/+state/recipes.facade";
import {RecipeModel} from "@recipes-nx/shared-domain";

@Component({
  selector: 'recipes-nx-recipe-details-feature',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecipeDetailsComponent implements OnInit {
  private recipeId: string = this.activatedRoute.snapshot.params['id'];

  recipe$: Observable<RecipeModel | null> = this.recipeFacade.activeRecipe;

  constructor(
    private activatedRoute: ActivatedRoute,
    private recipeFacade: RecipesFacade
  ) {}

  ngOnInit(): void {
    this.recipeFacade.getRecipeDetails(this.recipeId);
  }
}
