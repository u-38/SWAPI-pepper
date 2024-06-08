import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeaturePersonComponent } from './feature-person.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { PersonService } from '../data/person.service';
import { of } from 'rxjs';
import { initialPerson } from '../data/person.model';

describe('FeaturePersonComponent', () => {
  let component: FeaturePersonComponent;
  let fixture: ComponentFixture<FeaturePersonComponent>;
  let mockPersonService: jasmine.SpyObj<PersonService>;

  beforeEach(async () => {
    mockPersonService = jasmine.createSpyObj('PersonService', ['getTotalPeople', 'getPerson']);
    mockPersonService.getTotalPeople.and.returnValue(of({ count: 83 }));
    mockPersonService.getPerson.and.returnValue(of(initialPerson));

    await TestBed.configureTestingModule({
      imports: [
        FeaturePersonComponent,
        MatCardModule,
        MatButtonModule,
      ],
      providers: [
        { provide: PersonService, useValue: mockPersonService }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturePersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('convertToNumber', () => {
    it('should convert a string with commas and periods to a number', () => {
      const result = component['convertToNumber']('1,234.56');
      expect(result).toBe(1234.56);
    });

    it('should convert a string with only commas to a number', () => {
      const result = component['convertToNumber']('1,234');
      expect(result).toBe(1234);
    });

    it('should convert a string with only periods to a number', () => {
      const result = component['convertToNumber']('1234.56');
      expect(result).toBe(1234.56);
    });

    it('should convert a string with no commas or periods to a number', () => {
      const result = component['convertToNumber']('1234');
      expect(result).toBe(1234);
    });
  });
});
