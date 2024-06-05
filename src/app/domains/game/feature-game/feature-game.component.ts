import { Component } from '@angular/core';
import {FeaturePersonComponent} from "../../person/feature-person/feature-person.component";
import {FeatureStarshipComponent} from "../../starship/feature-starship/feature-starship.component";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-feature-game',
  standalone: true,
  imports: [
    FeaturePersonComponent,
    FeatureStarshipComponent,
    NgIf
  ],
  templateUrl: './feature-game.component.html',
  styleUrl: './feature-game.component.css',
})

export class FeatureGameComponent {
  public person = '';
  public starship = true;
  public winner = {name: 'Darth Vader'};

  public playGame(){
    console.log('play');
  }

  public resetGame(){
    console.log('reset');
  }
}
