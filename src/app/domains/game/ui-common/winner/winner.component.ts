import {Component, Input} from '@angular/core';
import {FightType} from "../../data/fight-type.model";
import {initialPerson} from "../../../person/data/person.model";
import {initialStarship} from "../../../starship/data/starship.model";
import {PersonCardComponent} from "../../../person/ui-common/person-card/person-card.component";
import {StarshipCardComponent} from "../../../starship/ui-common/starship-card/starship-card.component";
import {NgIf} from "@angular/common";
import {BattleData, initialBattleDataPerson} from "../../data/battle-data.model";
import {initialPlayer} from "../../../player/data/player";

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
    @Input() isVisible = true;
    @Input() battleData: BattleData = initialBattleDataPerson;
    protected readonly FightType = FightType;
  protected readonly initialPerson = initialPerson;
  protected readonly initialPlayer = initialPlayer;
  protected readonly initialStarship = initialStarship;
}
