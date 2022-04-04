import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RecipesStoreModule} from "./modules/recipes-store.module";
import {ErrorTailorRootModule} from "./modules/error-tailor-root.module";

@NgModule({
  imports: [CommonModule, RecipesStoreModule, ErrorTailorRootModule],
  exports: [RecipesStoreModule, ErrorTailorRootModule]
})
export class CoreModule {}
