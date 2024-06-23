import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api.services';
import { Patient } from '../model/patient.interface';
import { cpfValidator } from './cpf-validator';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  isMenuOpen: boolean = false;

  constructor(private fb: FormBuilder, private apiService : ApiService) {}
  constructor(
    private fb: FormBuilder,
     private router: Router
  ) {}

  ngOnInit() {
    
    this.loginForm = this.fb.group({
      cpf: ['', [Validators.required, Validators.maxLength(11), cpfValidator()]],
      senha: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(8)]]
    });
  }

  login() {
    if (this.loginForm.valid) {
      const { cpf, senha } = this.loginForm.value;
      console.log('CPF:', cpf);
      console.log('Senha:', senha);
      
      this.apiService.getToken().subscribe(x=>{
        console.log("Token SF:" + x);
        localStorage.setItem("SFToken", x);  
      }) ;

      var token = localStorage.getItem("SFToken") ?? "";

      this.apiService.userLogin(token, cpf, senha).subscribe(x=> {
        console.log("Resposta do Login:" + x);
        if (x != "Usuário não encontrado") {
          localStorage.setItem("user", x);
          //redirect home
        } else {
          window.alert(x);
          // Limpa cache
          localStorage.clear();
        }
      });

      // Teste demais APIs
      this.apiService.consultPatient(token, cpf).subscribe(x => {
        console.log("Resposta Consulta Paciente");
        console.log("Paciente Id " + x.id);
        console.log("Paciente Nome " + x.name);
      });

      this.apiService.consultListHospital(token).subscribe(x => {
        console.log("Resposta todos os hospitais");
        console.log(x.forEach(y => {
          console.log("Hospital Id: " + y.id);
          console.log("Hospital Nome: " + y.nome);
        }));
      });

      this.apiService.consultSpecificHospital(token, "001Dn000017XsX2IAK").subscribe(x => {
        console.log("Resposta Consulta Hospital Especifico");
        console.log("Hospital Id " + x.id);
        console.log("Hospital Nome " + x.nome);
      });

      

      this.apiService.createPatient(token, this.patientMock).subscribe(x=>{
        console.log("Create Patient:" + x);
      }) ;

      this.apiService.updatePatient(token, this.patientMockUpdate).subscribe(x=>{
        console.log("Update Patient:" + x);
      }) ;

      this.apiService.deletePatient(token, "a0GDn00000Eubj0MAB").subscribe(x=>{
        console.log("Delete Patient:" + x);
      }) ;

      this.router.navigate(['/selecione-hospital']);
    } else {
      this.loginForm.markAllAsTouched();
    }
  }

  get cpf() {
    return this.loginForm.get('cpf');
  }

  get senha() {
    return this.loginForm.get('senha');
  }
}
