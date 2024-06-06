import {Component, inject} from '@angular/core';
import {FeaturePersonComponent} from "../../person/feature-person/feature-person.component";
import {FeatureStarshipComponent} from "../../starship/feature-starship/feature-starship.component";
import {NgIf, NgOptimizedImage} from "@angular/common";
import {MatButtonModule} from "@angular/material/button";
import {MatSlideToggle} from "@angular/material/slide-toggle";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatOption, MatSelect} from "@angular/material/select";
import {FightType} from "../../shared/model/fight-type.model";
import {Person} from "../../shared/model/person.model";
import {GameService} from "../data/game.service";
import {BattleData} from "../../shared/model/battle-data.model";
import {Starship} from "../../shared/model/starship.model";

@Component({
  selector: 'app-feature-game',
  standalone: true,
  imports: [
    FeaturePersonComponent,
    FeatureStarshipComponent,
    NgIf,
    NgOptimizedImage,
    MatButtonModule,
    MatSlideToggle,
    MatFormFieldModule,
    MatSelect,
    MatOption,
  ],
  templateUrl: './feature-game.component.html',
  styleUrl: './feature-game.component.css',
})

export class FeatureGameComponent {
  winner: any = null;
  winnerState = 'hidden';

  countdown: number = 3;
  interval: any;
  playGameDirty: boolean = false;

  fightType: string = 'person';
  battleData: BattleData = {
    type: FightType.Person,
    data: [],
  }


  private gameService = inject(GameService);

  playGame() {
    this.startCountdown();
    this.playGameDirty = true;
  }

  onPersonLoaded(person: Person): void {
    this.battleData.type = FightType.Person;
    if (this.battleData && this.battleData.type === FightType.Person) {
      this.battleData.data.push(person);
    }
  }

  onStarshipLoaded(starship: Starship): void {
    this.battleData.type = FightType.Starship;
    if (this.battleData && this.battleData.type === FightType.Starship) {
      this.battleData.data.push(starship);
    }
  }

  startCountdown() {
    this.interval = setInterval(() => {
      this.countdown--;
      if (this.countdown === 0) {
        clearInterval(this.interval);
        this.determineWinner();
      }
    }, 1000);
  }

  determineWinner() {
    this.winner = this.gameService.determineWinner(this.battleData);
    this.winnerState = 'visible';
    this.playGameDirty = false
  }

  resetGame() {
    this.winner = null;
    this.winnerState = 'hidden';
    this.countdown = 3;
  }

  protected readonly FightType = FightType;
}
