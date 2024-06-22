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
      
      this.apiService.getToken(cpf, senha).subscribe(x=>{console.log(x)}) ;


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
