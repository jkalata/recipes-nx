import {NgModule} from "@angular/core";
import {EffectsModule} from "@ngrx/effects";
import {NxModule} from "@nrwl/angular";
import {StoreModule} from "@ngrx/store";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  imports: [
    EffectsModule.forRoot(),
    NxModule.forRoot(),
    StoreModule.forRoot({}),
    HttpClientModule
  ]
})

export class RecipesStoreModule {}
