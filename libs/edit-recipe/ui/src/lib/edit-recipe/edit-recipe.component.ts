import {Component, ChangeDetectionStrategy, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'recipes-nx-edit-recipe-button',
  templateUrl: './edit-recipe.component.html',
  styleUrls: ['./edit-recipe.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditRecipeComponent {

  @Output() edit = new EventEmitter<void>()

  onEdit(): void {
    this.edit.emit()
  }

}
