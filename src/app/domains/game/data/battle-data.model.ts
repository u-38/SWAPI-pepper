import { Person } from '../../person/data/person.model';
import { Starship } from '../../starship/data/starship.model';
import {FightType} from "./fight-type.model";

export type BattleData =
  | { type: FightType.Person, data: Person[], winner?: Person }
  | { type: FightType.Starship, data: Starship[], winner?: Starship };
