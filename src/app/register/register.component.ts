import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api.services';
import { Patient } from '../model/patient.interface';
import { cpfValidator } from '../cpf-validator';
import { Router } from '@angular/router';
import {MatCheckboxModule} from '@angular/material/checkbox';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {
  loginForm!: FormGroup;
  isMenuOpen: boolean = false;
  hasSpecialNeeds: boolean = false;


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
  }

  cancelar(){
    this.router.navigate(['/login']);
  }

  registrar(){

  }
}
