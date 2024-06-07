import {Component, Input} from '@angular/core';
import {MatCard, MatCardContent, MatCardHeader, MatCardImage, MatCardSubtitle} from "@angular/material/card";
import {initialStarship, Starship} from "../../data/starship.model";

@Component({
  selector: 'app-starship-card',
  standalone: true,
  imports: [
    MatCard,
    MatCardContent,
    MatCardHeader,
    MatCardImage,
    MatCardSubtitle
  ],
  templateUrl: './starship-card.component.html',
  styleUrl: './starship-card.component.css'
})
export class StarshipCardComponent {
  @Input() starship: Starship = initialStarship;

}
