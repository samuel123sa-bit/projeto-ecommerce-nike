import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class Contact {
  formData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  submitted = false;

  onSubmit(): void {
    if (this.formData.name && this.formData.email && this.formData.message) {
      this.submitted = true;
    }
  }
}