import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoggerService } from '../../../../../flight-app/src/app/domains/shared/util-logger';
import { AuthService } from '../../../../../flight-app/src/app/domains/shared/util-auth';
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
  // logger = inject(LoggerService);
  // auth = inject(AuthService);

  constructor() {
    // this.logger.debug('home', 'debug');
    // this.logger.info('home', 'info');
    // this.logger.error('home', 'error');
  }
}
