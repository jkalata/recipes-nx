import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { NxModule } from '@nrwl/angular';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '@recipes-nx/shared/environment';

@NgModule({
  imports: [
    EffectsModule.forRoot(),
    NxModule.forRoot(),
    StoreModule.forRoot({}),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    HttpClientModule,
  ],
})
export class RecipesStoreModule {}
