import {
  Component,
  ChangeDetectionStrategy,
  EventEmitter,
  Output,
} from '@angular/core';

@Component({
  selector: 'recipes-nx-remove-ingredient-button',
  templateUrl: './remove-ingredient-button.component.html',
  styleUrls: ['./remove-ingredient-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RemoveIngredientButtonComponent {
  @Output() remove = new EventEmitter<void>();

  onRemove(): void {
    this.remove.emit();
  }
}
