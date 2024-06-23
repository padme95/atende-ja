import { Component } from '@angular/core';

@Component({
  selector: 'app-selection-hospital',
  templateUrl: './selection-hospital.component.html',
  styleUrl: './selection-hospital.component.css',
})
export class SelectionHospitalComponent {
  ngOnInit() {}
  public isMenuOpen: boolean = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
