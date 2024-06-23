import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  areaLogada: boolean = localStorage.getItem("user") ? false : true;
  
  ngOnInit() {
    this.areaLogada = localStorage.getItem("user") ? false : true;
  }

} 

