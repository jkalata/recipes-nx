import {NgModule} from "@angular/core";
import {ErrorTailorModule} from "@ngneat/error-tailor";

@NgModule({
  imports: [
    ErrorTailorModule.forRoot({
      errors: {
        useValue: {
          required: 'This field is required',
          minlength: ({ requiredLength }) => `At least ${requiredLength} characters`,
          maxlength: ({ requiredLength }) => `At most ${requiredLength} characters`,
        }
      }
    })
  ],
  exports: [ErrorTailorModule]
})

export class ErrorTailorRootModule {}
