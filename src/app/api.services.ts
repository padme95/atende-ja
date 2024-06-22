import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, pluck } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://login.salesforce.com/services/oauth2/token'; 

  constructor(private http: HttpClient) {}

  public getToken(username: string, password: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });

    const body =  {
      grant_type: "password"
      
    };

    return this.http.post<any>(`${this.apiUrl}`, body, { headers: headers }).pipe(pluck("access_token"));
  }
}
