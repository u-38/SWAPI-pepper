import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NavbarComponent} from "../navbar/navbar.component";
import {FeaturePersonComponent} from "../../domains/person/feature-person/feature-person.component";
import {FeatureGameComponent} from "../../domains/game/feature-game/feature-game.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, NavbarComponent, FeaturePersonComponent, FeatureGameComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {

}
