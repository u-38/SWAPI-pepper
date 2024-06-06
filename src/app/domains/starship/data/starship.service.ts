import {inject, Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Starship} from "./starship.model";


@Injectable({
  providedIn: 'root'
})
export class StarshipService {
  private http = inject(HttpClient);

  private baseUrl = 'https://swapi.dev/api/starships/';

  getStarship(id: number): Observable<Starship> {
    return this.http.get<any>(`${this.baseUrl}${id}/`);
  }

  getTotalStarship(): Observable<any> {
    return this.http.get<any>(this.baseUrl);
  }
}
