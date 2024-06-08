import {Component, EventEmitter, inject, OnInit, Output} from '@angular/core';
import {initialPlayer, Player} from "../data/player";
import {Person} from "../../person/data/person.model";
import {Starship} from "../../starship/data/starship.model";
import {FightType} from "../../game/data/fight-type.model";
import {FeaturePersonComponent} from "../../person/feature-person/feature-person.component";
import {NgIf} from "@angular/common";
import {SettingsService} from "../../shared/settings/data/settings.service";
import {FeatureStarshipComponent} from "../../starship/feature-starship/feature-starship.component";

@Component({
  selector: 'app-feature-player',
  standalone: true,
  imports: [
    FeaturePersonComponent,
    NgIf,
    FeatureStarshipComponent
  ],
  templateUrl: './feature-player.component.html',
  styleUrl: './feature-player.component.css'
})
export class FeaturePlayerComponent implements OnInit {
  @Output() playerLoaded = new EventEmitter<Player>();
  player = initialPlayer;
  private settingsService = inject(SettingsService)
  fightType: FightType = FightType.Person;

  ngOnInit(): void {
    this.settingsService.settings$.subscribe( data => {
      this.fightType = data;
    })
  }
  onPersonLoaded(person: Person): void {
    if (this.fightType === FightType.Person) {
      this.player.person = person;
    }
  }

  onStarshipLoaded(starship: Starship): void {
    if (this.fightType === FightType.Starship) {
      this.player.starship = starship;
    }
  }

  protected readonly FightType = FightType;
}
