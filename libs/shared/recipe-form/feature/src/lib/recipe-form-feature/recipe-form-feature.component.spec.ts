import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeFormFeatureComponent } from './recipe-form-feature.component';

describe('RecipeFormFeatureComponent', () => {
  let component: RecipeFormFeatureComponent;
  let fixture: ComponentFixture<RecipeFormFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipeFormFeatureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeFormFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
