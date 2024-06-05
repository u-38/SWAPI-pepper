import {inject, Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  private http = inject(HttpClient);

  private apiUrl = 'https://swapi.dev/api/people/1/';

  getPerson(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
