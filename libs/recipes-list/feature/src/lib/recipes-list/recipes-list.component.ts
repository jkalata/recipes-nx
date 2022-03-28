import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {RecipesFacade} from "../../../../../data-access/src/lib/+state/recipes.facade";
import {Router} from "@angular/router";

@Component({
  selector: 'recipes-nx-recipes-list-feature',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RecipesListComponent implements OnInit {

  recipes$ = this.recipesFacade.recipesCollection

  constructor(
    private recipesFacade: RecipesFacade,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.recipesFacade.getRecipesCollection()
  }

  navigate(id: string) {
    this.router.navigate([id])
  }

}
