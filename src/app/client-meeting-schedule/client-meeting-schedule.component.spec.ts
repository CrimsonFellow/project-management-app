import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientMeetingScheduleComponent } from './client-meeting-schedule.component';

describe('ClientMeetingScheduleComponent', () => {
  let component: ClientMeetingScheduleComponent;
  let fixture: ComponentFixture<ClientMeetingScheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientMeetingScheduleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientMeetingScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
