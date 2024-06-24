import { Component } from '@angular/core';
import { faHome, faUser, faCalendar, faUsersLine, faLaptopMedical} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-nav-side',
  templateUrl: './nav-side.component.html',
  styleUrl: './nav-side.component.css'
})
export class NavSideComponent {
  faHome = faHome;
  faCalendar = faCalendar
  faUser = faUser;
  faLaptopMedical = faLaptopMedical
  faUsersLine = faUsersLine;

}
