import {initialStarship, Starship} from "../../starship/data/starship.model";
import {initialPerson, Person} from "../../person/data/person.model";

export type Player =
  {
    name: string,
    score: number,
    starship: Starship,
    person: Person,
  }

export const initialPlayer = {
  name: '',
  score: 0,
  starship: initialStarship,
  person: initialPerson,
}

export const initialPlayer1 = {
  name: 'Duke Doodle',
  score: 0,
  starship: initialStarship,
  person: initialPerson,
}

export const initialPlayer2 = {
  name: 'Baron Von Giggles',
  score: 0,
  starship: initialStarship,
  person: initialPerson,
}
