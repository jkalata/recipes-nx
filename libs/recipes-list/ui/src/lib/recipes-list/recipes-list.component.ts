import {
  Component,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { RecipeModel } from '@recipes-nx/shared-domain';

@Component({
  selector: 'recipes-nx-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecipesListComponent {
  @Input() recipes!: RecipeModel[] | null;
  @Output() navigateToDetails = new EventEmitter<string>();

  onClick(id: string) {
    this.navigateToDetails.emit(id);
  }
}
