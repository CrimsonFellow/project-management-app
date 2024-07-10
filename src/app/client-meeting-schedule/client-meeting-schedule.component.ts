import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-client-meeting-schedule',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './client-meeting-schedule.component.html',
  styleUrls: ['./client-meeting-schedule.component.css']
})
export class ClientMeetingScheduleComponent {
  clients: any[] = [];
  meetings: any[] = [];
  meeting = {
    clientId: '',
    date: '',
    notes: ''
  };
  meetingScheduled = false;

  constructor(private apiService: ApiService) {
    this.apiService.getClients().subscribe((data: any[]) => {
      this.clients = data;
    });
    this.loadMeetings();
  }

  onSubmit() {
    console.log('Submitting meeting form:', this.meeting);
    this.apiService.scheduleMeeting(this.meeting).subscribe({
      next: (response: any) => {
        console.log('Meeting scheduled:', response);
        this.resetForm();
        this.showSuccessMessage();
        this.loadMeetings();
      },
      error: (error: any) => {
        console.error('Error scheduling meeting:', error);
      }
    });
  }

  cancelMeeting(meetingId: number) {
    console.log('Cancelling meeting with id:', meetingId);
    this.apiService.cancelMeeting(meetingId).subscribe({
      next: () => {
        console.log('Meeting cancelled');
        this.loadMeetings();
      },
      error: (error: any) => {
        console.error('Error cancelling meeting:', error);
      }
    });
  }

  loadMeetings() {
    this.apiService.getMeetings().subscribe((data: any[]) => {
      this.meetings = data;
    });
  }

  resetForm() {
    this.meeting = {
      clientId: '',
      date: '',
      notes: ''
    };
  }

  showSuccessMessage() {
    this.meetingScheduled = true;
    setTimeout(() => {
      this.meetingScheduled = false;
    }, 3000); // Hide the message after 3 seconds
  }
}

