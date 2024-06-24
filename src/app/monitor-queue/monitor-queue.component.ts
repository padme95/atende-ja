import { Component } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-monitor-queue',
  templateUrl: './monitor-queue.component.html',
  styleUrl: './monitor-queue.component.css'
})
export class MonitorQueueComponent {
  center: google.maps.LatLngLiteral = {lat: 24, lng: 12};
  zoom = 4;



}
