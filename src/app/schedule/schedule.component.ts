import { Component } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-schedule',
  standalone: true,
  imports: [GoogleMapsModule],
  templateUrl: './schedule.component.html',
  styleUrl: './schedule.component.css'
})
export class ScheduleComponent {
  center: google.maps.LatLngLiteral = {lat: 24, lng: 12};
  zoom = 4;
}
