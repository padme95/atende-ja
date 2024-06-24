import { Component } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps';
import { environment } from '../../environments/environment';
import { faHome, faUser, faCalendar, faUsersLine, faLaptopMedical} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-monitor-queue',
  templateUrl: './monitor-queue.component.html',
  styleUrl: './monitor-queue.component.css'
})
export class MonitorQueueComponent {
  center: google.maps.LatLngLiteral = {lat: 24, lng: 12};
  zoom = 4;

  faHome = faHome;
  faCalendar = faCalendar
  faUser = faUser;
  faLaptopMedical = faLaptopMedical
  faUsersLine = faUsersLine;

}
