import {Injectable} from '@angular/core';
import {FightType} from "./fight-type.model";
import {BattleData} from "./battle-data.model";
import {Player} from "../../player/data/player";


@Injectable({
  providedIn: 'root'
})
export class GameService {

  determineWinner(battleData: BattleData): Player | undefined {
    if (battleData.type === FightType.Person) {
      return battleData.data.reduce((prev, current) => (prev.person.massNumber > current.person.massNumber ? prev : current));
    } else if (battleData.type === FightType.Starship) {
      return battleData.data.reduce((prev, current) => (prev.starship.crewNumber > current.starship.crewNumber ? prev : current));
    }
    return undefined;
  }


}
