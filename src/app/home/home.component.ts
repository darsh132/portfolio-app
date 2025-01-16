import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { trigger, transition, style, animate, stagger, query, keyframes } from '@angular/animations';

@Component({
  selector: 'app-home',
  standalone: true,
  animations: [
    trigger('heroAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(30px)' }),
        animate('0.8s cubic-bezier(0.35, 0, 0.25, 1)', 
          style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ]),
    trigger('staggerList', [
      transition(':enter', [
        query('.skill-item', [
          style({ opacity: 0, transform: 'translateY(30px)' }),
          stagger(100, [
            animate('0.6s cubic-bezier(0.35, 0, 0.25, 1)', 
              keyframes([
                style({ opacity: 0, transform: 'translateY(30px)', offset: 0 }),
                style({ opacity: 0.5, transform: 'translateY(15px)', offset: 0.3 }),
                style({ opacity: 1, transform: 'translateY(0)', offset: 1 })
              ]))
          ])
        ])
      ])
    ])
  ],
  template: `
    <div class="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white p-4">
      <div class="max-w-4xl w-full px-4 md:px-8" @heroAnimation>
        <div class="text-center mb-12 md:mb-16 relative">
          <div class="absolute -top-20 left-1/2 transform -translate-x-1/2 w-72 md:w-96 h-72 md:h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div class="absolute -top-20 left-1/2 transform -translate-x-1/2 w-72 md:w-96 h-72 md:h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
          
          <h1 class="text-4xl md:text-6xl font-bold mb-4 md:mb-6 relative">
            <span class="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-blue-400 animate-gradient">
              Darshan Bane
            </span>
          </h1>
          <p class="text-2xl md:text-3xl text-gray-300 mb-6 md:mb-8 font-light">Full Stack Developer</p>
          <div class="flex flex-col md:flex-row gap-4 md:gap-6 justify-center items-center mb-12">
            <button 
              (click)="navigateTo('/projects')"
              class="w-full md:w-auto group px-6 md:px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg hover:from-blue-700 hover:to-blue-800 transform hover:scale-105 transition-all duration-300 shadow-lg relative overflow-hidden">
              <span class="relative z-10">View Projects</span>
              <div class="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
            </button>
            <button 
              (click)="navigateTo('/contact')"
              class="w-full md:w-auto group px-6 md:px-8 py-3 bg-gradient-to-r from-purple-600 to-purple-700 rounded-lg hover:from-purple-700 hover:to-purple-800 transform hover:scale-105 transition-all duration-300 shadow-lg relative overflow-hidden">
              <span class="relative z-10">Contact Me</span>
              <div class="absolute inset-0 bg-gradient-to-r from-purple-400 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
            </button>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16" @staggerList>
          <div class="skill-item bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 md:p-8 rounded-xl backdrop-blur-sm hover:from-gray-800/60 hover:to-gray-900/60 transition-all duration-300 transform hover:scale-105 hover:shadow-xl border border-gray-700/30">
            <h3 class="text-xl md:text-2xl font-semibold mb-4 md:mb-6 text-blue-400 flex items-center">
              <svg class="w-5 h-5 md:w-6 md:h-6 mr-3" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                <path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd"/>
              </svg>
              Frontend Development
            </h3>
            <ul class="space-y-3 text-gray-300">
              <li class="flex items-center">
                <span class="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                Angular
              </li>
              <li class="flex items-center">
                <span class="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                HTML5 & CSS3
              </li>
              <li class="flex items-center">
                <span class="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                JavaScript
              </li>
              <li class="flex items-center">
                <span class="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                Tailwind CSS
              </li>
            </ul>
          </div>
          <div class="skill-item bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 md:p-8 rounded-xl backdrop-blur-sm hover:from-gray-800/60 hover:to-gray-900/60 transition-all duration-300 transform hover:scale-105 hover:shadow-xl border border-gray-700/30">
            <h3 class="text-xl md:text-2xl font-semibold mb-4 md:mb-6 text-purple-400 flex items-center">
              <svg class="w-5 h-5 md:w-6 md:h-6 mr-3" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293 1.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L7.586 10 5.293 7.707a1 1 0 010-1.414zM11 12a1 1 0 100 2h3a1 1 0 100-2h-3z" clip-rule="evenodd"/>
              </svg>
              Backend Development
            </h3>
            <ul class="space-y-3 text-gray-300">
              <li class="flex items-center">
                <span class="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                .NET Core MVC
              </li>
              <li class="flex items-center">
                <span class="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                .NET 6
              </li>
              <li class="flex items-center">
                <span class="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                SQL Server
              </li>
              <li class="flex items-center">
                <span class="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                SSMS
              </li>
            </ul>
          </div>
        </div>

        <div class="text-center relative" @heroAnimation>
          <div class="absolute -bottom-20 left-1/2 transform -translate-x-1/2 w-72 md:w-96 h-72 md:h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
          <p class="text-gray-400 max-w-2xl mx-auto text-base md:text-lg leading-relaxed px-4">
            Passionate about creating seamless web applications with modern technologies and best practices.
            Let's build something amazing together!
          </p>
        </div>
      </div>
    </div>
  `
})
export class HomeComponent {
  constructor(private router: Router) {}
  
  navigateTo(path: string) {
    this.router.navigate([path]);
  }
}