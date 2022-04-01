import {
  Component,
  ChangeDetectionStrategy,
  Output,
  EventEmitter,
  Input,
} from '@angular/core';

@Component({
  selector: 'recipes-nx-save-recipe-button',
  templateUrl: './save-recipe-button.component.html',
  styleUrls: ['./save-recipe-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SaveRecipeButtonComponent {
  @Input() disabled = true;
  @Output() save = new EventEmitter<void>();

  onSave(): void {
    this.save.emit();
  }
}
