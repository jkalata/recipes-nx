import {Component, ChangeDetectionStrategy} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'recipes-nx-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShellComponent {
  constructor(private router: Router) { }

  navigateBack() : void {
    this.router.navigate(['../'])
  }

}
