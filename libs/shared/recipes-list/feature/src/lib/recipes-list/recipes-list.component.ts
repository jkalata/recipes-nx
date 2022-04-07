import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
} from '@angular/core';
import { Router } from '@angular/router';
import { SearchBoxFilter } from '../../../../utils/src';
import { RecipesFacade } from '@recipes-nx/shared-data-access';

@Component({
  selector: 'recipes-nx-recipes-list-feature',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecipesListComponent implements OnInit {
  recipes$ = this.recipesFacade.recipesCollection;
  filteredRecipes$ = this.recipes$;

  constructor(
    private recipesFacade: RecipesFacade,
    private router: Router,
    private changeDetector: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.recipesFacade.getRecipesCollection();
  }

  navigate(id: number) {
    this.router.navigate([id]);
  }

  filter(searchTerm: string): void {
    this.filteredRecipes$ = SearchBoxFilter.filter(this.recipes$, searchTerm);
    this.changeDetector.markForCheck();
  }
}
