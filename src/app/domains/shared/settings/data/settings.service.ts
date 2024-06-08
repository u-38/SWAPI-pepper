import {Injectable} from '@angular/core';
import {FightType} from "../../../game/data/fight-type.model";
import {BehaviorSubject} from "rxjs";
import {initialPlayer1, initialPlayer2, Player} from "../../../player/data/player";

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  public settings$: BehaviorSubject<FightType> = new BehaviorSubject<FightType>(FightType.Person);
  public players$: BehaviorSubject<Player[]> = new BehaviorSubject<Player[]>([initialPlayer1, initialPlayer2]);

  handleFightTypeChange(newFightType: FightType): void {
    this.settings$.next(newFightType);
  }

  getFightType(): FightType {
    return this.settings$.getValue();
  }

  handlePlayersChange(newPlayer: Player): void {
    const currentPlayers = this.players$.value;
    this.players$.next([...currentPlayers, newPlayer]);
  }

  getPlayers(): FightType {
    return this.settings$.getValue();
  }
}

