import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Park } from './../models/park';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ParkService {
  constructor(private http: HttpClient) {}

  // ---  FIELDS  -----------------------------

  private baseUrl = environment.baseUrl + 'api/park';

  // --- METHODS --------------------------------
  index() {
    return this.http.get<Park[]>(this.baseUrl).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError('Error in Vol Service.index()');
      })
    );
    return;
  }
  create(park: Park) {
    return;
  }
  update(park: Park) {
    return;
  }
  destroy(id: string) {
    return;
  }

  // add gets, post, delets, updates below
}
