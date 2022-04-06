import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'recipes-nx-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddRecipeComponent {
  constructor(private router: Router) {}

  displayAddView(): void {
    this.router.navigate(['add']);
  }
}
