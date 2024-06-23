import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, pluck } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../environments/environment';
import { Patient } from './model/patient.interface';
import { Hospital } from './model/hospital.interface';

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

  public consultListHospital(sfToken:string): Observable<Hospital[]> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + sfToken
    });

    return this.http.get<any>(`${environment.getAllHospitalUrl}`, { headers: headers }).pipe(map(response => { 
      return response.acc as Hospital[] }));
  }

  public consultSpecificHospital(sfToken:string, idHospital:string): Observable<Hospital> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + sfToken
    });

 
    return this.http.get<any>(`${environment.getSpecificHospitalUrl}` + idHospital, { headers: headers }).pipe(map(response => { 
      return response.acc as Hospital }));
  }


  public createPatient(sfToken:string, patient: Patient): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + sfToken
    });

    const body = '{"data": [{ "email":"' + patient.email + '",' + 
                             '"telefone":"' + patient.telefone + '",' +
                             '"possui_necessidades_especiais":' + patient.possui_necessidades_especiais + ',' +
                             '"cpf":"' + patient.cpf + '",' +
                             '"name":"' + patient.name + '",' +
                             '"genero":"' + patient.genero + '",' +
                             '"data_nascimento":"' + patient.data_nascimento + '",' +
                             '"senha":"' + patient.senha + '",' +
                             '"necessidades_especiais":"' + patient.necessidades_especiais + '"}]}';

    console.log(body);                        

    return this.http.post<any>(`${environment.createPatientUrl}`, body, { headers: headers }).pipe(pluck("createdData"));
  }

  public updatePatient(sfToken:string, patient: Patient): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + sfToken
    });

    const body = '{"data": [{ "email":"' + patient.email + '",' + 
                             '"telefone":"' + patient.telefone + '",' +
                             '"possui_necessidades_especiais":' + patient.possui_necessidades_especiais + ',' +
                             '"id":"' + patient.id + '",' +
                             '"name":"' + patient.name + '",' +
                             '"genero":"' + patient.genero + '",' +
                             '"data_nascimento":"' + patient.data_nascimento + '",' +
                             '"necessidades_especiais":"' + patient.necessidades_especiais + '"}]}';

    console.log(body);                        

    return this.http.post<any>(`${environment.updatePatientUrl}`, body, { headers: headers }).pipe(pluck("Paciente"));
  }


  public deletePatient(sfToken:string, id: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + sfToken
    });

    const body = '{"data": [{"id":"' + id + '"}]}';

    return this.http.post<any>(`${environment.deletePatientUrl}`, body, { headers: headers }).pipe(pluck("success"));
  }

}
