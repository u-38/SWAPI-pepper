import {Component, Input} from '@angular/core';
import {FightType} from "../../game/data/fight-type.model";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatOption} from "@angular/material/core";
import {MatSelect} from "@angular/material/select";
import {NgIf} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {SettingsService} from "./data/settings.service";

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
    @Input() isVisible = true;

  fightType : FightType = FightType.Person;
  constructor(private settingsService: SettingsService) {
  }

  onFightTypeChange(newFightType: FightType): void {
    this.fightType = newFightType;
    localStorage.setItem('fightType', newFightType);
    this.settingsService.handleFightTypeChange(newFightType);
  }

  protected readonly FightType = FightType;
}
