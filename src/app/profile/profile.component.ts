import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  profileForm!: FormGroup;

  // Declaração das propriedades para evitar erro de tipo
  nome: string = '';
  email: string = '';
  telefone: string = '';
  novaSenha: string = '';

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.profileForm = this.fb.group({
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telefone: [''],
      novaSenha: ['']
    });
  }

  salvar() {
    if (this.profileForm.valid) {
      // Lógica para salvar os dados
      console.log('Dados do perfil:', this.profileForm.value);
      // Aqui você pode enviar os dados para um serviço ou fazer outra operação necessária
    } else {
      // Marcar campos como tocados para exibir mensagens de erro, se necessário
      this.profileForm.markAllAsTouched();
    }
  }
}
