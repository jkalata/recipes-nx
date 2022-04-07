import { RecipeModel } from '../interfaces/recipe.model';

export type AddRecipePayload = Omit<RecipeModel, 'id'>;
