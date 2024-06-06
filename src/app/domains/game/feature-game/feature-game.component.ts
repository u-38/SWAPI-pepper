import { Component } from '@angular/core';
import {FeaturePersonComponent} from "../../person/feature-person/feature-person.component";
import {FeatureStarshipComponent} from "../../starship/feature-starship/feature-starship.component";
import {NgIf, NgOptimizedImage} from "@angular/common";
import { MatButtonModule} from "@angular/material/button";
import {MatSlideToggle} from "@angular/material/slide-toggle";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatOption, MatSelect} from "@angular/material/select";
import {FightType} from "../model/fighType.model";

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

  playGame() {
    this.startCountdown();
    this.playGameDirty = true;
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
    this.winner = { name: 'Luke Skywalker' }; // Example winner
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
