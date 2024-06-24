import { Component } from '@angular/core';
import { faHome, faUser, faCalendar, faUsersLine, faLaptopMedical} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-triage',
  templateUrl: './triage.component.html',
  styleUrl: './triage.component.css'
})
export class TriageComponent {
  faHome = faHome;
  faCalendar = faCalendar
  faUser = faUser;
  faLaptopMedical = faLaptopMedical
  faUsersLine = faUsersLine;
}
