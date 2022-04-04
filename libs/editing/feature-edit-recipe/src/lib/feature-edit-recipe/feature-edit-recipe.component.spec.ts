import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureEditRecipeComponent } from './feature-edit-recipe.component';

describe('FeatureEditRecipeComponent', () => {
  let component: FeatureEditRecipeComponent;
  let fixture: ComponentFixture<FeatureEditRecipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FeatureEditRecipeComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureEditRecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
