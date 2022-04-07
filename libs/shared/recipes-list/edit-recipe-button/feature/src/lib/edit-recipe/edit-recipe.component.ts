import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'recipes-nx-edit-recipe',
  templateUrl: './edit-recipe.component.html',
  styleUrls: ['./edit-recipe.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditRecipeComponent {
  @Input() id: number | null = null;
  constructor(private router: Router) {}

  edit(): void {
    this.router.navigate([`${this.id}`, 'edit']);
  }
}
