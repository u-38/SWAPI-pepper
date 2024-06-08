import {Component, Input, OnInit} from '@angular/core';
import {FightType} from "../../game/data/fight-type.model";
import {MatFormField, MatFormFieldModule, MatLabel} from "@angular/material/form-field";
import {MatOption} from "@angular/material/core";
import {MatSelect} from "@angular/material/select";
import {NgForOf, NgIf} from "@angular/common";
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {SettingsService} from "./data/settings.service";
import {BattleData, initialBattleDataPerson} from "../../game/data/battle-data.model";
import {MatButtonModule} from "@angular/material/button";
import {MatInput, MatInputModule} from "@angular/material/input";
import {initialPlayer, initialPlayer1, initialPlayer2, Player} from "../../player/data/player";
import {initialStarship} from "../../starship/data/starship.model";
import {initialPerson} from "../../person/data/person.model";
import {MatCard, MatCardTitle} from "@angular/material/card";
import {MatList, MatListItem} from "@angular/material/list";
import {MatIcon, MatIconModule} from "@angular/material/icon";

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [
    MatFormField,
    MatLabel,
    MatOption,
    MatSelect,
    NgIf,
    FormsModule,
    MatButtonModule,
    NgForOf,
    MatInput,
    ReactiveFormsModule,
    MatCardTitle,
    MatCard,
    MatList,
    MatListItem,
    MatIcon,
    MatFormFieldModule, MatInputModule, MatIconModule
  ],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.css'
})
export class SettingsComponent implements OnInit{
  @Input() isVisible = true;
  @Input() battleData: BattleData = initialBattleDataPerson;
  playerForm: FormGroup;

  fightType: FightType = FightType.Person;
  players: Player[] = [initialPlayer1, initialPlayer2];

  constructor(private settingsService: SettingsService,
              private fb: FormBuilder) {
    this.playerForm = this.fb.group({
      name: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.settingsService.players$.subscribe(
      data => {
        this.players = data;
      }
    )

    this.settingsService.settings$.subscribe( data => {
      this.fightType = data;
    })
  }

  addPlayer() {
    const newPlayer: Player = {
      name: this.playerForm?.get('name')?.value,
      score: 0,
      starship: initialStarship,
      person: initialPerson
    };
    this.settingsService.handlePlayersChange(newPlayer);
    this.playerForm?.reset();
  }

  deletePlayer(index: number) {
    this.players.splice(index, 1);
  }

  onFightTypeChange(newFightType: FightType): void {
    this.fightType = newFightType;
    localStorage.setItem('fightType', newFightType);
    this.settingsService.handleFightTypeChange(newFightType);
  }


  protected readonly FightType = FightType;
}
