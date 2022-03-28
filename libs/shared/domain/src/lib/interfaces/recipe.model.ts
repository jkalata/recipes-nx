import { IngredientModel } from './ingredient.model';

export interface RecipeModel {
  _id: string;
  name: string;
  preparationTimeInMinutes: number;
  description: string;
  ingredients: IngredientModel[];
}
