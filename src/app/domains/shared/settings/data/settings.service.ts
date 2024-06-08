import { Injectable } from '@angular/core';
import {FightType} from "../../../game/data/fight-type.model";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  public settings$: BehaviorSubject<FightType> = new BehaviorSubject<FightType>(FightType.Person);

  handleFightTypeChange(newFightType: FightType): void {
    this.settings$.next(newFightType);
  }

  getFightType(): FightType {
    return this.settings$.getValue();
  }
}
