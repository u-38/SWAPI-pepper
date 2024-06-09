import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeaturePlayerComponent } from './feature-player.component';
import { FeaturePersonComponent } from '../../person/feature-person/feature-person.component';
import { FeatureStarshipComponent } from '../../starship/feature-starship/feature-starship.component';
import { SettingsService } from '../../shared/settings/data/settings.service';
import { FightType } from '../../game/data/fight-type.model';
import { Person } from '../../person/data/person.model';
import { BehaviorSubject } from 'rxjs';
import { NgIf } from '@angular/common';
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('FeaturePlayerComponent', () => {
  let component: FeaturePlayerComponent;
  let fixture: ComponentFixture<FeaturePlayerComponent>;
  let mockSettingsService: jasmine.SpyObj<SettingsService>;

  beforeEach(async () => {
    mockSettingsService = jasmine.createSpyObj('SettingsService', ['settings$']);
    mockSettingsService.settings$ = new BehaviorSubject<FightType>(FightType.Person);

    await TestBed.configureTestingModule({
      imports: [
        FeaturePlayerComponent,
        FeaturePersonComponent,
        FeatureStarshipComponent,
        NgIf,
        HttpClientTestingModule,
      ],
      providers: [
        { provide: SettingsService, useValue: mockSettingsService }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturePlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set fightType on init', () => {
    expect(component.fightType).toBe(FightType.Person);
  });

  it('should update fightType when settings change', () => {
    mockSettingsService.settings$.next(FightType.Starship);
    fixture.detectChanges();
    expect(component.fightType).toBe(FightType.Starship);
  });

  it('should emit playerLoaded with person data', () => {
    spyOn(component.playerLoaded, 'emit');
    const person: Person = {
      birth_year: "19BBY",
      eye_color: "blue",
      films: ["A New Hope"],
      gender: "male",
      hair_color: "blond",
      height: "172",
      homeworld: "Tatooine",
      mass: "77",
      name: "Luke Skywalker",
      skin_color: "fair",
      created: "2014-12-09T13:50:51.644000Z",
      edited: "2014-12-20T21:17:56.891000Z",
      species: [],
      starships: [],
      url: "https://swapi.dev/api/people/1/",
      vehicles: [],
      image: "https://starwars-visualguide.com/assets/img/characters/1.jpg",
      massNumber: 77
    };
    component.onPersonLoaded(person);
    expect(component.player.person).toEqual(person);
    expect(component.playerLoaded.emit).toHaveBeenCalledWith(component.player);
  });

});
