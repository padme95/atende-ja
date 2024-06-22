import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, pluck } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../environments/environment';
import { Patient } from './model/patient.interface';
import { hospital } from './model/hospital.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
 
  constructor(private http: HttpClient) {}

  public getToken(): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });

    const body = 'grant_type=password' + 
      '&client_id=' + environment.client_id +
      '&client_secret=' + environment.client_secret +
      '&username=' + environment.username +
      '&password=' + environment.password;

    return this.http.post<any>(`${environment.apiUrl}`, body, { headers: headers }).pipe(pluck("access_token"));
  }

  public userLogin(sfToken:string, cpf: string, password: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + sfToken
    });

    const body = '{"cpf":"' + cpf + '","senha":"' + password + '"}';

    return this.http.post<any>(`${environment.userLoginUrl}`, body, { headers: headers }).pipe(pluck("result"));
  }


  public consultPatient(sfToken:string, cpf: String): Observable<Patient> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + sfToken
    });

    const body = '{"cpf":"' + cpf + '"}';

    return this.http.post<any>(`${environment.consultPatientUrl}`, body, { headers: headers }).pipe(map(response => { 
      return response.data[0] as Patient }));
  }

  public consultListHospital(sfToken:string): Observable<hospital[]> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + sfToken
    });

    return this.http.get<any>(`${environment.getAllHospitalUrl}`, { headers: headers }).pipe(map(response => { 
      return response.acc as hospital[] }));
  }

  public consultSpecificHospital(sfToken:string, idHospital:string): Observable<hospital[]> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + sfToken
    });

    return this.http.get<any>(`${environment.getSpecificHospitalUrl}` + idHospital, { headers: headers }).pipe(map(response => { 
      return response.acc as hospital[] }));
  }

}
