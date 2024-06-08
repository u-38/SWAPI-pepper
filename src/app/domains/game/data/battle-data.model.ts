import {FightType} from "./fight-type.model";
import {Player} from "../../player/data/player";

export type BattleData =
  | { type: FightType.Person, data: Player[], winner?: Player }
  | { type: FightType.Starship, data: Player[], winner?: Player };

export const initialBattleDataPerson: BattleData = {
  type: FightType.Person,
  data: [],
  winner: undefined,
};

export const initialBattleDataStarship: BattleData = {
  type: FightType.Starship,
  data: [],
  winner: undefined,
};
