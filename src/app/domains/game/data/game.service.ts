import {Injectable} from '@angular/core';
import {FightType} from "./fight-type.model";
import {Starship} from "../../starship/data/starship.model";
import {Person} from "../../person/data/person.model";
import {BattleData} from "./battle-data.model";
import {BehaviorSubject} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class GameService {

  public settings$: BehaviorSubject<FightType> = new BehaviorSubject<FightType>(FightType.Person);

  determineWinner(battleData: BattleData): Person | Starship | undefined {
    if (battleData.type === FightType.Person) {
      return battleData.data.reduce((prev, current) => (prev.massNumber > current.massNumber ? prev : current));
    } else if (battleData.type === FightType.Starship) {
      return battleData.data.reduce((prev, current) => (prev.crewNumber > current.crewNumber ? prev : current));
    }
    return undefined;
  }

  handleFightTypeChange(newFightType: FightType): void {
    this.settings$.next(newFightType);
  }

  getFightType(): FightType {
    return this.settings$.getValue();
  }
}
