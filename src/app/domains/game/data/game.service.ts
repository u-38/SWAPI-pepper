import {Injectable} from '@angular/core';
import {FightType} from "../../shared/model/fight-type.model";
import {Starship} from "../../shared/model/starship.model";
import {Person} from "../../shared/model/person.model";
import {BattleData} from "../../shared/model/battle-data.model";


@Injectable({
  providedIn: 'root'
})
export class GameService {
  determineWinner(battleData: BattleData): Person | Starship | undefined {
    if (battleData.type === FightType.Person) {
      return battleData.data.reduce((prev, current) => (prev.mass > current.mass ? prev : current));
    } else if (battleData.type === FightType.Starship) {
      return battleData.data.reduce((prev, current) => (prev.crewNumber > current.crewNumber ? prev : current));
    }
    return undefined;
  }
}
