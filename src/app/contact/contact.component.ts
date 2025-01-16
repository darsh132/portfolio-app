import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
    <div class="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-4 md:p-8 flex items-center justify-center">
      <div class="w-full max-w-md bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 md:p-8 rounded-lg shadow-xl backdrop-blur-sm border border-gray-700/30">
        <h2 class="text-2xl md:text-3xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">Contact Me</h2>
        <form [formGroup]="contactForm" (ngSubmit)="onSubmit()" class="space-y-4">
          <div>
            <label for="name" class="block text-sm font-medium text-gray-300 mb-1">Name</label>
            <input
              type="text"
              id="name"
              formControlName="name"
              class="w-full px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-white placeholder-gray-400"
              placeholder="Your name"
            >
            @if (contactForm.get('name')?.touched && contactForm.get('name')?.invalid) {
              <p class="text-red-400 text-sm mt-1">Name is required</p>
            }
          </div>
          <div>
            <label for="email" class="block text-sm font-medium text-gray-300 mb-1">Email</label>
            <input
              type="email"
              id="email"
              formControlName="email"
              class="w-full px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-white placeholder-gray-400"
              placeholder="your.email@example.com"
            >
            @if (contactForm.get('email')?.touched && contactForm.get('email')?.invalid) {
              <p class="text-red-400 text-sm mt-1">Please enter a valid email address</p>
            }
          </div>
          <div>
            <label for="message" class="block text-sm font-medium text-gray-300 mb-1">Message</label>
            <textarea
              id="message"
              formControlName="message"
              rows="4"
              class="w-full px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-white placeholder-gray-400 resize-none"
              placeholder="Your message..."
            ></textarea>
            @if (contactForm.get('message')?.touched && contactForm.get('message')?.invalid) {
              <p class="text-red-400 text-sm mt-1">Message is required</p>
            }
          </div>
          <button
            type="submit"
            [disabled]="!contactForm.valid"
            class="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-lg font-medium hover:from-blue-600 hover:to-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-105"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  `
})
export class ContactComponent {
  contactForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    message: new FormControl('', Validators.required)
  });

  onSubmit() {
    if (this.contactForm.valid) {
      console.log(this.contactForm.value);
      // Here you would typically send the form data to a backend service
      this.contactForm.reset();
      alert('Message sent successfully!');
    }
  }
}