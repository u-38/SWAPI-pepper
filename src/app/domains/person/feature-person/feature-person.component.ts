import {Component, DestroyRef, EventEmitter, inject, OnInit, Output} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {initialPerson, Person} from '../data/person.model';
import {PersonService} from '../data/person.service'; // Ensure this path is correct
import {MatButtonModule} from '@angular/material/button';
import {NgStyle} from "@angular/common";
import {PersonCardComponent} from "../ui-common/person-card/person-card.component";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";

@Component({
  selector: 'app-feature-person',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    NgStyle,
    PersonCardComponent,
  ],
  templateUrl: './feature-person.component.html',
  styleUrls: ['./feature-person.component.css'],
})

export class FeaturePersonComponent implements OnInit {

  @Output() personLoaded = new EventEmitter<Person>();

  public person : Person = initialPerson;
  private maxRetries = 10;

  private personService = inject(PersonService);
  private destroyRef = inject(DestroyRef)

  ngOnInit(): void {
    this.personService.getTotalPeople().pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(totalData => {
      const totalPeople = totalData.count;
      this.loadPerson(  0, totalPeople)
    });
  }

  loadPerson(retries = 0, totalPeople: number): void {
    const randomId = Math.floor(Math.random() * totalPeople) + 1; // Assuming there are 83 characters
    this.personService.getPerson(randomId).pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(data => {
      if (data.mass === 'unknown' && retries < this.maxRetries) {
        this.loadPerson(retries + 1, totalPeople);
      } else {
        this.person = data;
        this.person.image = `https://starwars-visualguide.com/assets/img/characters/${randomId}.jpg`;
        this.personLoaded.emit(this.person);
        this.person.massNumber = this.convertToNumber(data.mass);
      }
    });
  }

   private convertToNumber(str: string): number {
    str = str.replace(/,/g, '');
    str = str.replace(/\.(?=\d{3,}$)/g, '');
    return parseFloat(str);
  }
}
