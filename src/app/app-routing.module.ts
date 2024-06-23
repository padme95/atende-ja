import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SelectionHospitalComponent } from './selection-hospital/selection-hospital.component';
import { ProfileComponent } from './profile/profile.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'selecione-hospital', component: SelectionHospitalComponent },
  { path: 'perfil', component: ProfileComponent },
  { path: 'sobre', component: AboutComponent},
  { path: 'home', component: HomeComponent},
  { path: 'contato', component: ContactComponent},
  { path: 'bem-vindo', component: WelcomeComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
