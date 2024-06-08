import { TestBed } from '@angular/core/testing';
import { SettingsService } from './settings.service';
import { FightType } from '../../../game/data/fight-type.model';
import { initialPlayer1, initialPlayer2, Player } from '../../../player/data/player';
import {initialStarship} from "../../../starship/data/starship.model";
import {initialPerson} from "../../../person/data/person.model";

describe('SettingsService', () => {
  let service: SettingsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SettingsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have initial fight type as FightType.Person', () => {
    expect(service.getFightType()).toBe(FightType.Person);
  });

  it('should change fight type', () => {
    service.handleFightTypeChange(FightType.Starship);
    expect(service.getFightType()).toBe(FightType.Starship);
  });

  it('should have initial players', () => {
    expect(service.players$.getValue()).toEqual([initialPlayer1, initialPlayer2]);
  });

  it('should add a new player', () => {
    const newPlayer: Player = {
      name: 'New Player',
      score: 0,
      starship: initialStarship,
      person: initialPerson,
    };
    service.handlePlayersChange(newPlayer);
    expect(service.players$.getValue()).toContain(newPlayer);
  });
});
