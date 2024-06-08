import {Component, Input, OnInit} from '@angular/core';
import {FightType} from "../../data/fight-type.model";
import {initialPerson} from "../../../person/data/person.model";
import {initialStarship} from "../../../starship/data/starship.model";
import {PersonCardComponent} from "../../../person/ui-common/person-card/person-card.component";
import {StarshipCardComponent} from "../../../starship/ui-common/starship-card/starship-card.component";
import {NgIf} from "@angular/common";
import {BattleData, initialBattleDataPerson} from "../../data/battle-data.model";
import confetti from 'canvas-confetti';

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
export class WinnerComponent implements OnInit {
    @Input() battleData: BattleData = initialBattleDataPerson;

  ngOnInit(): void {
      const duration = 3000; // in milliseconds

      confetti({
        particleCount: 100,
        spread: 160,
        origin: { y: 0.6 },
      });

      setTimeout(() => confetti.reset(), duration);
  }

  protected readonly FightType = FightType;
  protected readonly initialPerson = initialPerson;
  protected readonly initialStarship = initialStarship;
}
