import {Component, DestroyRef, inject, OnInit} from '@angular/core';
import {FeaturePersonComponent} from "../../person/feature-person/feature-person.component";
import {FeatureStarshipComponent} from "../../starship/feature-starship/feature-starship.component";
import {NgForOf, NgIf, NgOptimizedImage} from "@angular/common";
import {MatButtonModule} from "@angular/material/button";
import {MatSlideToggle} from "@angular/material/slide-toggle";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatOption, MatSelect} from "@angular/material/select";
import {FightType} from "../data/fight-type.model";
import {GameService} from "../data/game.service";
import {BattleData} from "../data/battle-data.model";
import {PersonCardComponent} from "../../person/ui-common/person-card/person-card.component";
import {StarshipCardComponent} from "../../starship/ui-common/starship-card/starship-card.component";
import {FormsModule} from "@angular/forms";
import {SettingsComponent} from "../../shared/settings/settings.component";
import {WinnerComponent} from "../ui-common/winner/winner.component";
import {SettingsService} from "../../shared/settings/data/settings.service";
import {FeaturePlayerComponent} from "../../player/feature-player/feature-player.component";
import {Player} from "../../player/data/player";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";

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
    FeaturePlayerComponent,
    NgForOf,
  ],
  templateUrl: './feature-game.component.html',
  styleUrl: './feature-game.component.css',
})

export class FeatureGameComponent implements OnInit {
  winnerDetermined = false;
  public readonly FightType = FightType;

  countdown = 3;
  interval: ReturnType<typeof setInterval> | undefined;
  playGameDirty = false;
  players: Player[] = [];

  battleData: BattleData = {
    type: FightType.Person,
    data: [],
  }

  private gameService = inject(GameService);
  private settingsService = inject(SettingsService);
  private destroyRef = inject(DestroyRef)

  public fightType: FightType = this.settingsService.getFightType()

  ngOnInit(): void {
    this.settingsService.settings$.pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(
      data => {
        this.fightType = data;
        this.resetGame();
    })

    this.settingsService.players$.pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(
      data => {
        this.players = data;
      })
  }

  playGame() {
    this.startCountdown();
    this.playGameDirty = true;
  }

  onPlayerLoaded(player: Player): void {
    if (this.fightType === FightType.Person) {
      this.battleData.data.push(player);
    }
    if (this.fightType === FightType.Starship) {
      this.battleData.data.push(player);
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
    this.battleData.winner = this.gameService.determineWinner(this.battleData);
    this.addPoint(this.battleData.winner);
    this.playGameDirty = false;
    this.winnerDetermined = true;
  }

  addPoint(winner: Player | undefined) {
    const championPlayer = this.players.find(player => player.name === winner?.name);
    if (championPlayer && winner !== undefined) {
      winner.score += 1;
      this.settingsService.players$.next([...this.players]);
    }
  }

  resetGame() {
    this.winnerDetermined = false;
    this.countdown = 3;
    this.battleData = {
      type: this.fightType,
      data: [],
      winner: undefined
    };
  }

}
