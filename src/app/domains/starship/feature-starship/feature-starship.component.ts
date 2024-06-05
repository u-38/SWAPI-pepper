import {Component, Input} from '@angular/core';
import {Starship} from "../starship.model";

@Component({
  selector: 'app-feature-starship',
  standalone: true,
  imports: [],
  templateUrl: './feature-starship.component.html',
  styleUrl: './feature-starship.component.css'
})
export class FeatureStarshipComponent {
  @Input() starship: Starship | undefined;
}
