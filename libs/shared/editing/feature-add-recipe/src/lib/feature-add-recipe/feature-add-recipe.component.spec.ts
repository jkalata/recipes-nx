import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureAddRecipeComponent } from './feature-add-recipe.component';

describe('FeatureAddRecipeComponent', () => {
  let component: FeatureAddRecipeComponent;
  let fixture: ComponentFixture<FeatureAddRecipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FeatureAddRecipeComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureAddRecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
