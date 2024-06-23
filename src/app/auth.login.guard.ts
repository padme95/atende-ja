import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(): boolean {
    const isLoggedIn = !!localStorage.getItem('user');
    if (isLoggedIn) {
      this.router.navigate(['/perfil']); // Redireciona para a tela de perfil se o usuário estiver logado
      return false;
    }
    return true;
  }
}
