import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Output,
  EventEmitter,
} from '@angular/core';
import { ControlContainer, Validators } from '@angular/forms';
import {
  ControlsOf,
  FormBuilder,
  FormControl,
  FormGroup,
} from '@ngneat/reactive-forms';
import { IngredientModel, RecipeModel } from '@recipes-nx/shared-domain';
import {Router} from "@angular/router";

@Component({
  selector: 'recipes-nx-recipe-form-feature',
  templateUrl: './recipe-form-feature.component.html',
  styleUrls: ['./recipe-form-feature.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecipeFormFeatureComponent implements OnInit {
  @Output() save = new EventEmitter<void>();

  form!: FormGroup<ControlsOf<RecipeModel>>;

  constructor(
    private controlContainer: ControlContainer,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.form = this.controlContainer.control as FormGroup<
      ControlsOf<RecipeModel>
    >;
  }

  addIngredient(): void {
    this.form.get('ingredients').push(this.createNewIngredient());
  }

  private createNewIngredient(): FormGroup<ControlsOf<IngredientModel>> {
    return this.fb.group({
      _id: new FormControl(this.getNewId(), Validators.required),
      quantity: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
    });
  }

  private getNewId(): string {
    return (this.form.controls.ingredients.length + 1).toString();
  }

  removeIngredient(index: number): void {
    this.form.get('ingredients').removeAt(index);
  }

  onSave(): void {
    this.save.emit();
  }

  cancel(): void {
    this.router.navigate([''])
  }
}
