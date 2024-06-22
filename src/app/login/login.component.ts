import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api.services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  isMenuOpen: boolean = false;
 

  constructor(private fb: FormBuilder, private apiService : ApiService) {}

  ngOnInit() {
    
    this.loginForm = this.fb.group({
      cpf: ['', [Validators.required, Validators.pattern(/^\d{11}$/)]],
      senha: ['', [Validators.required, Validators.minLength(6)]]
    });
  
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
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
      })

      // Teste demais APIs
      this.apiService.consultPatient(token, cpf).subscribe(x => {
        console.log("Resposta Consulta Paciente");
        console.log("Paciente Id " + x.id);
        console.log("Paciente Nome " + x.name);
      })

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
