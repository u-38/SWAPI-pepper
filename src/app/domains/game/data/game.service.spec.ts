import { TestBed } from '@angular/core/testing';
import { GameService } from './game.service';
import { FightType } from './fight-type.model';
import { BattleData } from './battle-data.model';
import { Player } from '../../player/data/player';
import { initialPerson } from '../../person/data/person.model';
import { initialStarship } from '../../starship/data/starship.model';

describe('GameService', () => {
  let service: GameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('determineWinner', () => {
    it('should determine the winner by person mass number for FightType.Person', () => {
      const players: Player[] = [
        { name: 'Player1', score: 0, starship: initialStarship, person: { ...initialPerson, massNumber: 70 } },
        { name: 'Player2', score: 0, starship: initialStarship, person: { ...initialPerson, massNumber: 80 } }
      ];
      const battleData: BattleData = { type: FightType.Person, data: players };

      const winner = service.determineWinner(battleData);
      expect(winner).toBe(players[1]);
    });

    it('should determine the winner by starship crew number for FightType.Starship', () => {
      const players: Player[] = [
        { name: 'Player1', score: 0, starship: { ...initialStarship, crewNumber: 5 }, person: initialPerson },
        { name: 'Player2', score: 0, starship: { ...initialStarship, crewNumber: 10 }, person: initialPerson }
      ];
      const battleData: BattleData = { type: FightType.Starship, data: players };

      const winner = service.determineWinner(battleData);
      expect(winner).toBe(players[1]);
    });
  });
});
