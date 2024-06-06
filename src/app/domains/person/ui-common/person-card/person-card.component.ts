import {Component, Input} from '@angular/core';
import {MatCard, MatCardContent, MatCardHeader, MatCardImage, MatCardSubtitle} from "@angular/material/card";
import {initialPerson, Person} from "../../data/person.model";

@Component({
  selector: 'app-person-card',
  standalone: true,
    imports: [
        MatCard,
        MatCardContent,
        MatCardHeader,
        MatCardImage,
        MatCardSubtitle
    ],
  templateUrl: './person-card.component.html',
  styleUrl: './person-card.component.css'
})
export class PersonCardComponent {
  @Input() person: Person = initialPerson;
}
