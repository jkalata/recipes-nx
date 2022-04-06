import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  EventEmitter,
  Output,
} from '@angular/core';

@Component({
  selector: 'recipes-nx-add-ingredient-button',
  templateUrl: './add-ingredient-button.component.html',
  styleUrls: ['./add-ingredient-button.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddIngredientButtonComponent {
  @Output() add = new EventEmitter<void>();

  onAdd(): void {
    this.add.emit();
  }
}
