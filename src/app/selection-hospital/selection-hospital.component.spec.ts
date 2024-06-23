import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectionHospitalComponent } from './selection-hospital.component';

describe('SelectionHospitalComponent', () => {
  let component: SelectionHospitalComponent;
  let fixture: ComponentFixture<SelectionHospitalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectionHospitalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectionHospitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
