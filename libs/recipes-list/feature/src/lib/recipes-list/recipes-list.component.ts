import {Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef} from '@angular/core';
import {Router} from "@angular/router";
import {RecipesFacade} from "../../../../../shared/data-access/src/lib/+state/recipes.facade";
import {SearchBoxFilter} from "../../../../utils/src";

@Component({
  selector: 'recipes-nx-recipes-list-feature',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RecipesListComponent implements OnInit {

  recipes$ = this.recipesFacade.recipesCollection
  filteredRecipes$ = this.recipes$

  constructor(
    private recipesFacade: RecipesFacade,
    private router: Router,
    private changeDetector: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.recipesFacade.getRecipesCollection()
  }

  navigate(id: string) {
    this.router.navigate([id])
  }

  filter(searchTerm: string): void {
    this.filteredRecipes$ = SearchBoxFilter.filter(this.recipes$, searchTerm)
    this.changeDetector.markForCheck();
  }

}
