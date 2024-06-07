import {Component, inject, OnInit, SimpleChanges} from '@angular/core';
import {FeaturePersonComponent} from "../../person/feature-person/feature-person.component";
import {FeatureStarshipComponent} from "../../starship/feature-starship/feature-starship.component";
import {NgIf, NgOptimizedImage} from "@angular/common";
import {MatButtonModule} from "@angular/material/button";
import {MatSlideToggle} from "@angular/material/slide-toggle";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatOption, MatSelect} from "@angular/material/select";
import {FightType} from "../data/fight-type.model";
import {Person} from "../../person/data/person.model";
import {GameService} from "../data/game.service";
import {BattleData} from "../data/battle-data.model";
import {Starship} from "../../starship/data/starship.model";
import {PersonCardComponent} from "../../person/ui-common/person-card/person-card.component";
import {StarshipCardComponent} from "../../starship/ui-common/starship-card/starship-card.component";
import {FormsModule} from "@angular/forms";
import {SettingsComponent} from "../ui-common/settings/settings.component";
import {WinnerComponent} from "../ui-common/winner/winner.component";

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
    PersonCardComponent,
    StarshipCardComponent,
    FormsModule,
    SettingsComponent,
    WinnerComponent,
  ],
  templateUrl: './feature-game.component.html',
  styleUrl: './feature-game.component.css',
})

export class FeatureGameComponent implements OnInit {
  winnerDetermined: boolean = false;
  public readonly FightType = FightType;

  countdown: number = 3;
  interval: any;
  playGameDirty: boolean = false;

  battleData: BattleData = {
    type: FightType.Person,
    data: [],
  }

  private gameService = inject(GameService);
  public fightType: FightType = this.gameService.getFightType()

  ngOnInit(): void {
    this.gameService.settings$.subscribe(
      data => {
        this.resetGame();
        this.fightType = data;
    })
  }

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
    console.log(this.battleData);
    this.battleData.winner = this.gameService.determineWinner(this.battleData);
    this.playGameDirty = false;
    this.winnerDetermined = true;
  }

  resetGame() {
    this.winnerDetermined = false;
    this.countdown = 3;
    this.battleData.type = FightType.Person;
    this.battleData.data = [];
  }

}
