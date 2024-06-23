import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { cpfValidator } from './cpf-validator'; // Importando a função de validação do CPF

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  isMenuOpen: boolean = false;

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      cpf: ['', [Validators.required, Validators.maxLength(11), cpfValidator()]],
      senha: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(8)]]
    });
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  login() {
    if (this.loginForm.valid) {
      const { cpf, senha } = this.loginForm.value;

      //if (cpf === '44677232857' && senha === '12345678') {

        localStorage.setItem('user', JSON.stringify({ cpf }));
        this.router.navigate(['/selecione-hospital']);
      // } else {
      //   alert('Credenciais inválidas');
      // }
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
