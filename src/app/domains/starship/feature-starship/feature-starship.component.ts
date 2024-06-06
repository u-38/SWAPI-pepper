import {Component, EventEmitter, inject, OnInit, Output} from '@angular/core';
import {Starship} from "../data/starship.model";
import {MatCard, MatCardContent, MatCardHeader, MatCardImage, MatCardSubtitle} from "@angular/material/card";
import {StarshipService} from "../data/starship.service";
import {Person} from "../../person/data/person.model";

@Component({
  selector: 'app-feature-starship',
  standalone: true,
    imports: [
        MatCard,
        MatCardContent,
        MatCardHeader,
        MatCardImage,
        MatCardSubtitle
    ],
  templateUrl: './feature-starship.component.html',
  styleUrl: './feature-starship.component.css'
})

export class FeatureStarshipComponent implements OnInit {
  @Output() starshipLoaded = new EventEmitter<Starship>();

  starship: Starship | null = null;
  private maxRetries = 10;

  private starshipService = inject(StarshipService);

  ngOnInit(): void {
    this.starshipService.getTotalStarship().subscribe(totalData => {
      const totalStarships = totalData.count;
      const randomId = Math.floor(Math.random() * totalStarships) + 1;
      this.loadStarship(  0, totalStarships)
    });
  }

  loadStarship(retries = 0, totalStarships: number): void {
    const randomId = Math.floor(Math.random() * totalStarships) + 1;
    this.starshipService.getStarship(randomId).subscribe(
      data => {
        if (data.crew === 'unknown' && retries < this.maxRetries) {
          this.loadStarship(retries + 1, totalStarships);
        } else {
          const imageUrl = `https://starwars-visualguide.com/assets/img/starships/${randomId}.jpg`;
          this.checkImageAvailability(imageUrl).then(isAvailable => {
            this.starship = data;
            this.starship.crewNumber = Number(data.crew.replace(/,/g, ''));

            if (isAvailable) {
              this.starship = data;
              this.starship.image = imageUrl;
            } else {
              this.starship = data;
              this.starship.image = 'https://starwars-visualguide.com/assets/img/big-placeholder.jpg'
            }
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

  private checkImageAvailability(url: string): Promise<boolean> {
    return new Promise((resolve) => {
      const img = new Image();
      img.onload = () => resolve(true);
      img.onerror = () => resolve(false);
      img.src = url;
    });
  }

}
