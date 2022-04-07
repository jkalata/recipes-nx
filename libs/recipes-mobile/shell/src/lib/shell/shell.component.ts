import {Component, ChangeDetectionStrategy} from '@angular/core';
import {Router} from "@angular/router";
import {RecipesFacade} from "@recipes-nx/shared-data-access";
import {Observable} from "rxjs";

@Component({
  selector: 'recipes-nx-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShellComponent {
  loading$: Observable<boolean> = this.recipesFacade.loading;

  constructor(private router: Router, private recipesFacade: RecipesFacade) { }

  navigateBack() : void {
    this.router.navigate(['../'])
  }
}
