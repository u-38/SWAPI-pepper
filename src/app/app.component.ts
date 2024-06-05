import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {FeaturePersonComponent} from "./domains/person/feature-person/feature-person.component";
import {FeatureGameComponent} from "./domains/game/feature-game/feature-game.component";
import {FeatureStarshipComponent} from "./domains/starship/feature-starship/feature-starship.component";
import {NavbarComponent} from "./shell/navbar/navbar.component";
import {AboutComponent} from "./shell/about/about.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatSlideToggleModule, FeaturePersonComponent, FeatureGameComponent, FeatureStarshipComponent, NavbarComponent, AboutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'swapi';
}
