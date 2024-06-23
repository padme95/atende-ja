import { Component, EventEmitter, OnInit, Output, output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api.services';
import { Patient } from '../model/patient.interface';
import { cpfValidator } from '../cpf-validator';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  isMenuOpen: boolean = false;

  constructor(
    private fb: FormBuilder,
     private router: Router,
     private apiService : ApiService
  ) {}

  ngOnInit() {

    this.loginForm = this.fb.group({
      cpf: ['', [Validators.required, Validators.maxLength(11), cpfValidator()]],
      senha: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(8)]]
    });

    if (localStorage.getItem("user")) {
      this.router.navigate(['/bem-vindo']);
    } else {
      localStorage.clear();
    }
  }

  @Output() valueFormChange = new EventEmitter<boolean>();


  login() {
    if (this.loginForm.valid) {
      const { cpf, senha } = this.loginForm.value;
      console.log('CPF:', cpf);
      console.log('Senha:', senha);

      this.apiService.getToken().subscribe(x=>{
        console.log("Token SF:" + x);
        localStorage.setItem("SFToken", x);

        var token = localStorage.getItem("SFToken") ?? "";

        this.apiService.userLogin(token, cpf, senha).subscribe(x=> {
          console.log("Resposta do Login:" + x);
          if (x != "Usuário não encontrado") {
            localStorage.setItem("user", x);
            //redirect home
            // Apenas faz o redirect se conseguir pegar o usuário
            //this.valueFormChange.emit(this.loginForm as any)
            this.router.navigate(['/bem-vindo']);

          } else {
            window.alert(x);
            // Limpa cache
            localStorage.clear();
          }
        });
        
      }) ;

      
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
