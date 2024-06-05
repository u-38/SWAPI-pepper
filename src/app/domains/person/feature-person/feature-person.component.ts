import {Component, inject, OnInit} from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Person } from './person.model';
import {PersonService} from "../data/person.service";
import {MatButtonModule} from "@angular/material/button";

@Component({
  selector: 'app-feature-person',
  standalone: true,
  imports: [
    MatCardModule, MatButtonModule
  ],
  templateUrl: './feature-person.component.html',
  styleUrls: ['./feature-person.component.css'],
})

export class FeaturePersonComponent implements OnInit {
  person: Person = {
    name: 'Darth Vader',
    mass: '50kg',
  };

  // personService = inject(PersonService);

  ngOnInit(): void {
    // this.personService.getPerson().subscribe(data => {
    //   this.person = data;
    //   console.log(this.person);
    // });
  }
}
