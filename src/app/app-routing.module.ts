import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SelectionHospitalComponent } from './selection-hospital/selection-hospital.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'selecione-hospital', component: SelectionHospitalComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
