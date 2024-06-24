import { Component } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps';
import { faHome, faUser, faCalendar, faUsersLine, faLaptopMedical} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrl: './schedule.component.css'
})
export class ScheduleComponent {
  center: google.maps.LatLngLiteral = {lat: 24, lng: 12};
  zoom = 4;

  faHome = faHome;
  faCalendar = faCalendar
  faUser = faUser;
  faLaptopMedical = faLaptopMedical
  faUsersLine = faUsersLine;
}
