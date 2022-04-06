import { NgModule } from '@angular/core';
import { UnsavedGuard } from '../guards/unsaved.guard';

@NgModule({
  providers: [UnsavedGuard],
})
export class SharedEditingSharedUtilsModule {}
