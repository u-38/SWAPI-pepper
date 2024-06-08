import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturePlayerComponent } from './feature- component';

describe('FeaturePlayerComponent', () => {
  let component: FeaturePlayerComponent;
  let fixture: ComponentFixture<FeaturePlayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeaturePlayerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeaturePlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
