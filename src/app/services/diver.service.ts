import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DiverService {
  constructor(private http: HttpClient) {}

  // -- FIELDS -----------------------------
  private baseUrl = environment.baseUrl + 'api/diverlog';

  // --- METHODS ---------------------------
}
