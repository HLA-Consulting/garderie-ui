import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnfantService {

  private baseUrl = 'http://localhost:8080/api/enfants';

  constructor(private http: HttpClient) { }

  getEnfant(id: number): Observable<Object> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createEnfant(enfant: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}` + `/create`, enfant);
  }

  updateEnfant(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteEnfant(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getEnfantsList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  getEnfantsByPrenom(prenom: String): Observable<any> {
    return this.http.get(`${this.baseUrl}/prenom/${prenom}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(`${this.baseUrl}` + `/delete`, { responseType: 'text' });
  }
}
