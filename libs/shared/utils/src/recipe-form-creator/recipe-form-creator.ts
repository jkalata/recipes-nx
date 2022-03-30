import {
  AddRecipePayload, IngredientModel, INGREDIENTS_MIN, RECIPE_DESCRIPTION_MAXLENGTH,
  RECIPE_DESCRIPTION_MINLENGTH,
  RECIPE_NAME_MAXLENGTH,
  RECIPE_NAME_MINLENGTH,
  RecipeModel
} from "@recipes-nx/shared-domain";
import {ControlsOf, FormArray, FormBuilder, FormControl, FormGroup} from "@ngneat/reactive-forms";
import {Validators} from "@angular/forms";

export class RecipeFormCreator {
  private fb = new FormBuilder();
  private recipe: RecipeModel | null;

  constructor(recipe?: RecipeModel) {
    this.recipe = recipe ?? null;
  }

  create(): FormGroup<ControlsOf<AddRecipePayload>>{
    const formGroup = this.fb.group({
      name: new FormControl(this.recipe?.name ?? '', [
        Validators.required,
        Validators.minLength(RECIPE_NAME_MINLENGTH),
        Validators.maxLength(RECIPE_NAME_MAXLENGTH)
        ]
      ),
      description: new FormControl(this.recipe?.description ?? '', [
        Validators.required,
        Validators.minLength(RECIPE_DESCRIPTION_MINLENGTH),
        Validators.maxLength(RECIPE_DESCRIPTION_MAXLENGTH)
      ]),
      preparationTimeInMinutes: new FormControl(this.recipe?.preparationTimeInMinutes ?? 0, [
        Validators.required
      ]),
      ingredients: this.createIngredientsFormArray()
    })

    this.recipe = null;
    return formGroup;
  }

  private createIngredientsFormArray(): FormArray<IngredientModel> {
    return this.recipe?.ingredients ? this.getExistingIngredients(this.recipe.ingredients) : this.getNewIngredients();
  }

  private getExistingIngredients(ingredients: IngredientModel[]): FormArray<IngredientModel> {
    return this.fb.array(
      ingredients.map(ingredient => this.fb.group({
        _id: new FormControl(ingredient._id, Validators.required),
        name: new FormControl(ingredient.name, Validators.required),
        quantity: new FormControl(ingredient.quantity, Validators.required)
      }))
    )
  }

  private getNewIngredients(): FormArray<IngredientModel> {
    const formArray: FormArray<IngredientModel> = this.fb.array([])

    for(let i=0; i < INGREDIENTS_MIN; i++){
      formArray.push(
        this.fb.group({
          _id: new FormControl((i+1).toString(), Validators.required),
          name: new FormControl('', Validators.required),
          quantity: new FormControl('', Validators.required)
        })
      )
    }

    return formArray;
  }

}
