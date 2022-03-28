import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RecipesStoreModule} from "./modules/recipes-store.module";

@NgModule({
  imports: [CommonModule, RecipesStoreModule],
  exports: [RecipesStoreModule]
})
export class CoreModule {}
