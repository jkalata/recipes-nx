import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBoxFeatureComponent } from './search-box-feature.component';

describe('SearchBoxFeatureComponent', () => {
  let component: SearchBoxFeatureComponent;
  let fixture: ComponentFixture<SearchBoxFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchBoxFeatureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBoxFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
