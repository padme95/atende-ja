import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SelectionHospitalComponent } from './selection-hospital/selection-hospital.component';
import { ProfileComponent } from './profile/profile.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RegisterComponent } from './register/register.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { MonitorQueueComponent } from './monitor-queue/monitor-queue.component';
import { ScheduleComponent } from './schedule/schedule.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'perfil', component: ProfileComponent },
  { path: 'sobre', component: AboutComponent},
  { path: 'home', component: HomeComponent},
  { path: 'contato', component: ContactComponent},
  { path: 'registrar', component: RegisterComponent},
  { path: 'bem-vindo', component: WelcomeComponent},
  { path: 'acompanhar-fila', component: MonitorQueueComponent},
  { path: 'agendamento', component: ScheduleComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
