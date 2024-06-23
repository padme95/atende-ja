import { Component } from '@angular/core';
import { faHome, faUser, faCalendar } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent {

  faHome = faHome;
  faCalendar = faCalendar
  faUser = faUser;

}
