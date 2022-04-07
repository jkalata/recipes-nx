import { IngredientModel } from './ingredient.model';

export interface RecipeModel {
  id: string;
  name: string;
  preparationTimeInMinutes: number;
  description: string;
  ingredients: IngredientModel[];
}
