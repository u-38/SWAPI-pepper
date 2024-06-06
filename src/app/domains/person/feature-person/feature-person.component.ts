import { Component, inject, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Person } from './person.model';
import { PersonService } from '../data/person.service'; // Ensure this path is correct
import { MatButtonModule } from '@angular/material/button';
import {NgStyle} from "@angular/common";
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-feature-person',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    NgStyle,
  ],
  templateUrl: './feature-person.component.html',
  styleUrls: ['./feature-person.component.css'],
  animations: [
    trigger('winnerAnimation', [
      state('hidden', style({
        opacity: 0,
      })),
      state('visible', style({
        opacity: 1,
      })),
      transition('hidden => visible', [
        animate('3s')
      ]),
    ])
  ]
})

export class FeaturePersonComponent implements OnInit {
  person: Person | null = null;
  private personService = inject(PersonService);

    ngOnInit(): void {
      this.personService.getTotalPeople().subscribe(totalData => {
        const totalPeople = totalData.count;
        const randomId = Math.floor(Math.random() * totalPeople) + 1;

        this.personService.getPerson(randomId).subscribe(data => {
          this.person = data;
          this.person.image = `https://starwars-visualguide.com/assets/img/characters/${randomId}.jpg`;
          console.log(this.person);
        });
      });

  }
}
