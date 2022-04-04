import {Component, ChangeDetectionStrategy, Output, EventEmitter} from '@angular/core';
import {ControlsOf, FormBuilder, FormControl, FormGroup} from "@ngneat/reactive-forms";
import {SearchModel} from "@recipes-nx/recipes-list/search-box/domain";

@Component({
  selector: 'recipes-nx-search-box-feature',
  templateUrl: './search-box-feature.component.html',
  styleUrls: ['./search-box-feature.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchBoxFeatureComponent {
  @Output() valueChange = new EventEmitter<string>()
  form: FormGroup<ControlsOf<SearchModel>>;

  constructor(private fb: FormBuilder) {
    this.form = this.initForm();
    this.onValueChanges()
  }

  private initForm(): FormGroup<ControlsOf<SearchModel>> {
    return this.fb.group({
      searchTerm: new FormControl('')
    })
  }

  private onValueChanges(): void {
    this.form.valueChanges
      .subscribe(() => this.valueChange.emit(this.form.get('searchTerm').getRawValue()))
  }


}
