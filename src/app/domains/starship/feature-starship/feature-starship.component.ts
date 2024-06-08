import {Component, EventEmitter, inject, OnInit, Output} from '@angular/core';
import {initialStarship, Starship} from "../data/starship.model";
import {MatCard, MatCardContent, MatCardHeader, MatCardImage, MatCardSubtitle} from "@angular/material/card";
import {StarshipService} from "../data/starship.service";
import {StarshipCardComponent} from "../ui-common/starship-card/starship-card.component";

@Component({
  selector: 'app-feature-starship',
  standalone: true,
  imports: [
    MatCard,
    MatCardContent,
    MatCardHeader,
    MatCardImage,
    MatCardSubtitle,
    StarshipCardComponent
  ],
  templateUrl: './feature-starship.component.html',
  styleUrl: './feature-starship.component.css'
})

export class FeatureStarshipComponent implements OnInit {
  @Output() starshipLoaded = new EventEmitter<Starship>();

  starship: Starship = initialStarship;
  private maxRetries = 10;

  private starshipService = inject(StarshipService);

  ngOnInit(): void {
    this.starshipService.getTotalStarship().subscribe(totalData => {
      const totalStarships = totalData.count;
      this.loadStarship(  0, totalStarships)
    });
  }

  loadStarship(retries = 0, totalStarships: number): void {
    const randomId = Math.floor(Math.random() * totalStarships) + 1;

    this.starshipService.getStarship(randomId).subscribe(
      data => {
        const { crew } = data;

        if (crew === 'unknown' && retries < this.maxRetries) {
          this.loadStarship(retries + 1, totalStarships);
        } else {
          const imageUrl = `https://starwars-visualguide.com/assets/img/starships/${randomId}.jpg`;

          this.checkImageAvailability(imageUrl).then(isAvailable => {
            this.starship = {
              ...data,
              crewNumber: this.parseCrewNumber(crew),
              image: isAvailable ? imageUrl : 'https://starwars-visualguide.com/assets/img/big-placeholder.jpg'
            };

            this.starshipLoaded.emit(this.starship);
          });
        }
      },
      error => {
        console.error('Error loading starship', error);

        if (retries < this.maxRetries) {
          this.loadStarship(retries + 1, totalStarships);
        }
      }
    );
  }

  private parseCrewNumber(crew: string): number {
    if (crew.includes('-')) {
      const parts = crew.split('-').map(part => Number(part.replace(/,/g, '').trim()));
      return Math.max(...parts);
    } else {
      return Number(crew.replace(/,/g, '').trim());
    }
  }

  private checkImageAvailability(url: string): Promise<boolean> {
    return new Promise((resolve) => {
      const img = new Image();
      img.onload = () => resolve(true);
      img.onerror = () => resolve(false);
      img.src = url;
    });
  }

}
