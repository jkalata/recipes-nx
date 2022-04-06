import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ControlsOf, FormGroup } from '@ngneat/reactive-forms';
import { ControlContainer } from '@angular/forms';

@Component({
  selector: 'recipes-nx-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchBoxComponent implements OnInit {
  form!: FormGroup<ControlsOf<{ searchTerm: string }>>;

  constructor(private controlContainer: ControlContainer) {}

  ngOnInit(): void {
    this.form = this.controlContainer.control as FormGroup<
      ControlsOf<{ searchTerm: string }>
    >;
  }
}
