import { Component } from '@angular/core';
import { faHome, faUser, faCalendar, faUsersLine, faLaptopMedical} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent {

  faHome = faHome;
  faCalendar = faCalendar
  faUser = faUser;
  faLaptopMedical = faLaptopMedical
  faUsersLine = faUsersLine;

}
