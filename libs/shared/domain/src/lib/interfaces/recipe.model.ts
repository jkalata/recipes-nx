import { IngredientModel } from './ingredient.model';

export interface RecipeModel {
  id: number;
  name: string;
  preparationTimeInMinutes: number;
  description: string;
  ingredients: IngredientModel[];
}
