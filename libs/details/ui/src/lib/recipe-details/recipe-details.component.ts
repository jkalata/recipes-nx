import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { RecipeModel } from '@recipes-nx/shared-domain';

@Component({
  selector: 'recipes-nx-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecipeDetailsComponent {
  @Input() recipe!: RecipeModel | null;
}
