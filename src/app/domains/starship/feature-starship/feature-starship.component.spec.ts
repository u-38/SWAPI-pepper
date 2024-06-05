import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureStarshipComponent } from './feature-starship.component';

describe('FeatureStarshipComponent', () => {
  let component: FeatureStarshipComponent;
  let fixture: ComponentFixture<FeatureStarshipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatureStarshipComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FeatureStarshipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
