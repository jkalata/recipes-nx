import {Component, ChangeDetectionStrategy, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'recipes-nx-cancel-button',
  templateUrl: './cancel-button.component.html',
  styleUrls: ['./cancel-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CancelButtonComponent {

  @Output() cancel = new EventEmitter<void>()

  onCancel(): void {
    this.cancel.emit()
  }
}
