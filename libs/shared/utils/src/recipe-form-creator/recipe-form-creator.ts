import {
  AddRecipePayload, IngredientModel, INGREDIENTS_MIN, RECIPE_DESCRIPTION_MAXLENGTH,
  RECIPE_DESCRIPTION_MINLENGTH,
  RECIPE_NAME_MAXLENGTH,
  RECIPE_NAME_MINLENGTH,
  RecipeModel
} from "@recipes-nx/shared-domain";
import {ControlsOf, FormArray, FormBuilder, FormControl, FormGroup} from "@ngneat/reactive-forms";
import {AbstractControl, ValidationErrors, Validators} from "@angular/forms";
import {Injectable} from "@angular/core";
import {RecipesDataService} from "../../../data-access/src/lib/services/recipes-data.service";
import {Observable, timer} from "rxjs";
import {map, switchMap} from "rxjs/operators";

@Injectable()
export class RecipeFormCreator {
  private fb = new FormBuilder();
  private recipe!: RecipeModel | null;

  constructor(
    private recipeDataService: RecipesDataService
  ) {
  }

  create(recipe?: RecipeModel): FormGroup<ControlsOf<AddRecipePayload>>{
    this.recipe = recipe ?? null;
    return this.fb.group({
      name: new FormControl(this.recipe?.name ?? '', [
        Validators.required,
        Validators.minLength(RECIPE_NAME_MINLENGTH),
        Validators.maxLength(RECIPE_NAME_MAXLENGTH)
        ],
        [this.asyncNameValidator.bind(this)]
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
  }

  private asyncNameValidator(control: AbstractControl): Observable<ValidationErrors | null> {
    return timer(500).pipe(
      switchMap(() => this.recipeDataService.getCollection().pipe(
        map(recipes => recipes.some(recipe => {
          return !this.isTheSameAsInitial(recipe.name) && this.alreadyExists(recipe.name, control.value)
        }) ? {'notUnique': true} : null
        )
      ))
    )
  }

  private isTheSameAsInitial(name: string): boolean {
    return name === this.recipe?.name
  }

  private alreadyExists(name: string, value: string): boolean {
    return name === value
  }


  private createIngredientsFormArray(): FormArray<IngredientModel> {
    return this.recipe?.ingredients ? this.getExistingIngredients(this.recipe.ingredients) : this.getNewIngredients();
  }

  private getExistingIngredients(ingredients: IngredientModel[]): FormArray<IngredientModel> {
    return this.fb.array(
      ingredients.map(ingredient => this.fb.group({
        id: new FormControl(ingredient.id, Validators.required),
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
          id: new FormControl(i+1, Validators.required),
          name: new FormControl('', Validators.required),
          quantity: new FormControl('', Validators.required)
        })
      )
    }

    return formArray;
  }

}
