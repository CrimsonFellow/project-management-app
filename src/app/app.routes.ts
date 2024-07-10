import { Routes } from '@angular/router';
import { ClientCreationComponent } from './client-creation/client-creation.component';
import { ClientMeetingScheduleComponent } from './client-meeting-schedule/client-meeting-schedule.component';

export const routes: Routes = [
  { path: 'client-creation', component: ClientCreationComponent },
  { path: 'client-meeting-schedule', component: ClientMeetingScheduleComponent },
  { path: '', redirectTo: '/client-creation', pathMatch: 'full' } // Redirect to client-creation by default
];
