import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbar } from '@angular/material/toolbar';
import { MatIcon } from '@angular/material/icon';
import { MatSidenav, MatSidenavContainer } from '@angular/material/sidenav';
import { MatNavList } from '@angular/material/list';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ProfileComponent } from './profile/profile.component';
import { SelectionHospitalComponent } from './selection-hospital/selection-hospital.component';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { RegisterComponent } from './register/register.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { TriageComponent } from './triage/triage.component';
import { MonitorQueueComponent } from './monitor-queue/monitor-queue.component';
import { NavSideComponent } from './nav-side/nav-side.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProfileComponent,
    SelectionHospitalComponent,
    NavbarComponent,
    RegisterComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    WelcomeComponent,
    TriageComponent,
    MonitorQueueComponent,
    NavSideComponent
  ],
  imports: [
    FontAwesomeModule,
    AppRoutingModule,
    FlexLayoutModule,
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatToolbar,
    MatIcon,
    MatSidenav,
    MatSidenavContainer,
    MatNavList,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [RouterOutlet, provideAnimationsAsync()],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {

  constructor() {
    // Adiciona todos os ícones do Font Awesome Solid à biblioteca
    library.add(fas);
  }

 }
