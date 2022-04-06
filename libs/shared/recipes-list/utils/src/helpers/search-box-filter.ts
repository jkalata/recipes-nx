import { RecipeModel } from '@recipes-nx/shared-domain';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
export class SearchBoxFilter {
  static filter(recipes$: Observable<RecipeModel[]>, searchValue: string) {
    return recipes$.pipe(
      map((recipes) =>
        recipes.filter((recipe) => SearchBoxFilter.check(recipe, searchValue))
      )
    );
  }

  private static check(recipe: RecipeModel, value: string): boolean {
    return (
      recipe.name.toLowerCase().includes(value) ||
      recipe.ingredients.some((ingredient) =>
        ingredient.name.toLowerCase().includes(value)
      )
    );
  }
}
