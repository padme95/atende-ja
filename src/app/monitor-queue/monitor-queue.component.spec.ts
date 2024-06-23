import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonitorQueueComponent } from './monitor-queue.component';

describe('MonitorQueueComponent', () => {
  let component: MonitorQueueComponent;
  let fixture: ComponentFixture<MonitorQueueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MonitorQueueComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonitorQueueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
