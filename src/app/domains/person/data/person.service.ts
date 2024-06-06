import {inject, Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Person} from "./person.model";

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  private http = inject(HttpClient);

  private baseUrl = 'https://swapi.dev/api/people/';

  getPerson(id: number): Observable<Person> {
    return this.http.get<any>(`${this.baseUrl}${id}/`);
  }

  getTotalPeople(): Observable<any> {
    return this.http.get<any>(this.baseUrl);
  }
}
