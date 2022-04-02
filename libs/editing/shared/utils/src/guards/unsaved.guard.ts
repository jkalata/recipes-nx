import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanDeactivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import {
  ConfirmDialogComponent
} from "../../../../../shared/ui-confirm-dialog/src/lib/confirm-dialog/confirm-dialog.component";
import {
  RecipeFormFeatureComponent
} from "../../../recipe-form/feature/src/lib/recipe-form-feature/recipe-form-feature.component";

@Injectable()
export class UnsavedGuard implements CanDeactivate<RecipeFormFeatureComponent> {
  constructor(private dialog: MatDialog) {}

  canDeactivate(
    component: RecipeFormFeatureComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return component.form.dirty
      ? this.dialog.open(ConfirmDialogComponent).afterClosed()
      : true;
  }
}
