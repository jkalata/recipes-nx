import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'recipes-nx-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecipesComponent {}
