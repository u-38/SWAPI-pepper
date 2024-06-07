import {Component, Input} from '@angular/core';
import {FightType} from "../../data/fight-type.model";
import {initialPerson, Person} from "../../../person/data/person.model";
import {initialStarship, Starship} from "../../../starship/data/starship.model";
import {PersonCardComponent} from "../../../person/ui-common/person-card/person-card.component";
import {StarshipCardComponent} from "../../../starship/ui-common/starship-card/starship-card.component";
import {NgIf} from "@angular/common";
import {BattleData, initialBattleDataPerson} from "../../data/battle-data.model";

@Component({
  selector: 'app-winner',
  standalone: true,
  imports: [
    PersonCardComponent,
    StarshipCardComponent,
    NgIf
  ],
  templateUrl: './winner.component.html',
  styleUrl: './winner.component.css'
})
export class WinnerComponent {
    @Input() isVisible: boolean = true;
    @Input() battleData: BattleData = initialBattleDataPerson;
    protected readonly FightType = FightType;
  protected readonly initialStarship = initialStarship;
  protected readonly initialPerson = initialPerson;
}
