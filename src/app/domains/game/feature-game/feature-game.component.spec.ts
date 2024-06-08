import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FeatureGameComponent } from './feature-game.component';
import { FightType } from '../data/fight-type.model';
import { GameService } from '../data/game.service';
import { SettingsService } from '../../shared/settings/data/settings.service';
import { Player } from '../../player/data/player';
import { BehaviorSubject } from 'rxjs';
import {initialStarship} from "../../starship/data/starship.model";
import {initialPerson} from "../../person/data/person.model";
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('FeatureGameComponent', () => {
  let component: FeatureGameComponent;
  let fixture: ComponentFixture<FeatureGameComponent>;
  let mockGameService: jasmine.SpyObj<GameService>;
  let mockSettingsService: jasmine.SpyObj<SettingsService>;

  beforeEach(async () => {
    mockGameService = jasmine.createSpyObj('GameService', ['determineWinner']);
    mockSettingsService = jasmine.createSpyObj('SettingsService', ['getFightType', 'players$', 'settings$']);

    mockSettingsService.getFightType.and.returnValue(FightType.Person);
    mockSettingsService.players$ = new BehaviorSubject<Player[]>([
      { name: 'Player1', score: 0, starship: initialStarship, person: initialPerson },
      { name: 'Player2', score: 0, starship: initialStarship, person: initialPerson }
    ]);
    mockSettingsService.settings$ = new BehaviorSubject<FightType>(FightType.Person);

    await TestBed.configureTestingModule({
      imports: [
        FeatureGameComponent,
        NoopAnimationsModule,
        HttpClientTestingModule
      ],
      providers: [
        { provide: GameService, useValue: mockGameService },
        { provide: SettingsService, useValue: mockSettingsService },
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with correct fight type and players', () => {
    expect(component.fightType).toBe(FightType.Person);
    expect(component.players.length).toBe(2);
  });

  it('should start countdown and determine winner', (done) => {
    component.playGame();
    expect(component.playGameDirty).toBeTrue();

    setTimeout(() => {
      expect(component.countdown).toBe(0);
      expect(component.winnerDetermined).toBeTrue();
      done();
    }, 4000);
  });

  it('should add player to battle data on player loaded', () => {
    const player: Player = { name: 'Player3', score: 0, starship: initialStarship, person: initialPerson };
    component.onPlayerLoaded(player);
    expect(component.battleData.data).toContain(player);
  });

  it('should add point to the winning player', () => {
    const player: Player = { name: 'Player1', score: 0, starship: initialStarship, person: initialPerson };
    component.players = [player];
    component.addPoint(player);
    expect(player.score).toBe(1);
  });

  it('should reset the game', () => {
    component.resetGame();
    expect(component.winnerDetermined).toBeFalse();
    expect(component.countdown).toBe(3);
    expect(component.battleData.data.length).toBe(0);
  });
});
