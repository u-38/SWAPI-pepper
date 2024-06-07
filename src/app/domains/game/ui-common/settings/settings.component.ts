import {Component, Input} from '@angular/core';
import {FightType} from "../../data/fight-type.model";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatOption} from "@angular/material/core";
import {MatSelect} from "@angular/material/select";
import {NgIf} from "@angular/common";
import {GameService} from "../../data/game.service";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [
    MatFormField,
    MatLabel,
    MatOption,
    MatSelect,
    NgIf,
    FormsModule
  ],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.css'
})
export class SettingsComponent {
    @Input() isVisible: boolean = true;

  fightType : FightType = FightType.Person;
  constructor(private gameService: GameService) {
  }

  onFightTypeChange(newFightType: FightType): void {
    this.fightType = newFightType;
    localStorage.setItem('fightType', newFightType);
    this.gameService.handleFightTypeChange(newFightType);
  }

  protected readonly FightType = FightType;
}
