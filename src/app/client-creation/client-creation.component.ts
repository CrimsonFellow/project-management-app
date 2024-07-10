import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-client-creation',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './client-creation.component.html',
  styleUrls: ['./client-creation.component.css']
})
export class ClientCreationComponent {
  client = {
    name: '',
    email: '',
    phone: '',
    address: ''
  };
  clientAdded = false;

  constructor(private apiService: ApiService) {}

  onSubmit() {
    this.apiService.createClient(this.client).subscribe((response: any) => {
      console.log('Client created:', response);
      this.resetForm();
      this.showSuccessMessage();
    });
  }

  resetForm() {
    this.client = {
      name: '',
      email: '',
      phone: '',
      address: ''
    };
  }

  showSuccessMessage() {
    this.clientAdded = true;
    setTimeout(() => {
      this.clientAdded = false;
    }, 3000); // Hide the message after 3 seconds
  }
}


