import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturePersonComponent } from './feature-person.component';

describe('FeaturePersonComponent', () => {
  let component: FeaturePersonComponent;
  let fixture: ComponentFixture<FeaturePersonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeaturePersonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FeaturePersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
