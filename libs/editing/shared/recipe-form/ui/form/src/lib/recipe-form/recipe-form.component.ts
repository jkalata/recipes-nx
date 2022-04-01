import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Output,
  EventEmitter,
} from '@angular/core';
import { ControlContainer } from '@angular/forms';
import { ControlsOf, FormGroup } from '@ngneat/reactive-forms';
import { RecipeModel } from '@recipes-nx/shared-domain';

@Component({
  selector: 'recipes-nx-recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecipeFormComponent implements OnInit {
  @Output() addIngredient = new EventEmitter<void>();
  @Output() removeIngredient = new EventEmitter<number>();

  form!: FormGroup<ControlsOf<RecipeModel>>;

  constructor(private controlContainer: ControlContainer) {}

  ngOnInit(): void {
    this.form = this.controlContainer.control as FormGroup<
      ControlsOf<RecipeModel>
    >;
  }

  onAddIngredient(): void {
    this.addIngredient.emit();
  }

  onRemoveIngredient(index: number): void {
    this.removeIngredient.emit(index);
  }
}
