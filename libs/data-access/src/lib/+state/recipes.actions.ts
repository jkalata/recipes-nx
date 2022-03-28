import {Action} from "@ngrx/store";
import {AddRecipePayload} from "@recipes-nx/domain";
import {RecipeModel} from "@recipes-nx/domain";
import {HttpErrorResponse} from "@angular/common/http";

export namespace fromRecipesActions {
  export enum Types {
    GetRecipesCollection = "[Recipes] Get Recipes Collection",
    GetRecipesCollectionFail = "[Recipes] Get Recipes Collection Fail",
    GetRecipesCollectionSuccess = "[Recipes] Get Recipes Collection Success",
    GetRecipeDetails = "[Recipes] Get Recipe Details",
    GetRecipeDetailsFail = "[Recipes] Get Recipe Details Fail",
    GetRecipeDetailsSuccess = "[Recipes] Get Recipe Details Success",
    UpdateRecipe = "[Recipes] Update Recipe",
    UpdateRecipeFail = "[Recipes] Update Recipe Fail",
    UpdateRecipeSuccess = "[Recipes] Update Recipe Success",
    DeleteRecipe = "[Recipes] Delete Recipe",
    DeleteRecipeFail = "[Recipes] Delete Recipe Fail",
    DeleteRecipeSuccess = "[Recipes] Delete Recipe Success",
    AddRecipe = "[Recipes] Add Recipe",
    AddRecipeFail = "[Recipes] Add Recipe Fail",
    AddRecipeSuccess = "[Recipes] Add Recipe Success"
  }

  export class GetRecipesCollection implements Action {
    readonly type = Types.GetRecipesCollection
  }

  export class GetRecipesCollectionFail implements Action {
    readonly type = Types.GetRecipesCollectionFail

    constructor(public payload: HttpErrorResponse) {
    }
  }

  export class GetRecipesCollectionSuccess implements Action {
    readonly type = Types.GetRecipesCollectionSuccess

    constructor(public payload: RecipeModel[]) {
    }
  }

  export class GetRecipeDetails implements Action {
    readonly type = Types.GetRecipeDetails

    constructor(public payload: string) {
    }
  }

  export class GetRecipeDetailsFail implements Action {
    readonly type = Types.GetRecipeDetailsFail

    constructor(public payload: HttpErrorResponse) {
    }
  }

  export class GetRecipeDetailsSuccess implements Action {
    readonly type = Types.GetRecipeDetailsSuccess

    constructor(public payload: RecipeModel) {
    }
  }

  export class UpdateRecipe implements Action {
    readonly type = Types.UpdateRecipe

    constructor(public payload: RecipeModel) {
    }
  }

  export class UpdateRecipeFail implements Action {
    readonly type = Types.UpdateRecipeFail

    constructor(public payload: HttpErrorResponse) {
    }
  }

  export class UpdateRecipeSuccess implements Action {
    readonly type = Types.UpdateRecipeSuccess
  }

  export class DeleteRecipe implements Action {
    readonly type = Types.DeleteRecipe

    constructor(public payload: string) {
    }
  }

  export class DeleteRecipeFail implements Action {
    readonly type = Types.DeleteRecipeFail

    constructor(public payload: HttpErrorResponse) {
    }
  }

  export class DeleteRecipeSuccess implements Action {
    readonly type = Types.DeleteRecipeSuccess
  }

  export class AddRecipe implements Action {
    readonly type = Types.AddRecipe

    constructor(public payload: AddRecipePayload) {
    }
  }

  export class AddRecipeFail implements Action {
    readonly type = Types.AddRecipeFail

    constructor(public payload: HttpErrorResponse) {
    }
  }

  export class AddRecipeSuccess implements Action {
    readonly type = Types.AddRecipeSuccess
  }

  export type RecipesActionsUnion =
    GetRecipesCollection |
    GetRecipesCollectionFail |
    GetRecipesCollectionSuccess |
    GetRecipeDetails |
    GetRecipeDetailsFail |
    GetRecipeDetailsSuccess |
    UpdateRecipe |
    UpdateRecipeFail |
    UpdateRecipeSuccess |
    DeleteRecipe |
    DeleteRecipeFail |
    DeleteRecipeSuccess |
    AddRecipe |
    AddRecipeFail |
    AddRecipeSuccess;
}
