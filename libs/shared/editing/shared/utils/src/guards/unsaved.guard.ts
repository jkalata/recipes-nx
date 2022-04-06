import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanDeactivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { mergeMap, take } from 'rxjs/operators';
import { FeatureAddRecipeComponent } from '../../../../feature-add-recipe/src/lib/feature-add-recipe/feature-add-recipe.component';
import { FeatureEditRecipeComponent } from '../../../../feature-edit-recipe/src/lib/feature-edit-recipe/feature-edit-recipe.component';
import {ConfirmDialogComponent} from "@recipes-nx/shared-ui-confirm-dialog";

@Injectable()
export class UnsavedGuard
  implements
    CanDeactivate<FeatureAddRecipeComponent | FeatureEditRecipeComponent>
{
  constructor(private dialog: MatDialog) {}

  canDeactivate(
    component: FeatureAddRecipeComponent | FeatureEditRecipeComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return component.cancelGuard$.pipe(
      take(1),
      mergeMap((value: boolean) =>
        value && component.form?.dirty
          ? this.dialog.open(ConfirmDialogComponent).afterClosed()
          : of(true)
      )
    );
  }
}
