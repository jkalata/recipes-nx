import {Component, ChangeDetectionStrategy, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'recipes-nx-delete-recipe-button',
  templateUrl: './delete-recipe.component.html',
  styleUrls: ['./delete-recipe.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DeleteRecipeComponent {

  @Output() delete = new EventEmitter<void>()

  onDelete(): void {
    this.delete.emit()
  }

}
