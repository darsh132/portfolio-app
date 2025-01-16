import { Component } from '@angular/core';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-about',
  standalone: true,
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('0.6s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ]),
    trigger('staggerList', [
      transition(':enter', [
        query('.experience-item', [
          style({ opacity: 0, transform: 'translateY(20px)' }),
          stagger(100, [
            animate('0.5s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
          ])
        ])
      ])
    ])
  ],
  template: `
    <div class="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white p-8">
      <div class="max-w-4xl mx-auto" @fadeIn>
        <h2 class="text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
          About Me
        </h2>
        
        <div class="bg-gray-800/50 p-8 rounded-xl backdrop-blur-sm mb-12">
          <p class="text-lg text-gray-300 leading-relaxed mb-6">
            I'm a Full Stack Developer currently working at Microworld Technologies Inc (eScan), with previous experience at L&T Defence.
            I specialize in building secure, scalable web applications with a focus on cybersecurity and enterprise solutions.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12" @staggerList>
          <div class="experience-item bg-gray-800/50 p-6 rounded-xl hover:bg-gray-800/70 transition-all duration-300">
            <h3 class="text-xl font-semibold mb-4 text-blue-400">Technical Expertise</h3>
            <ul class="space-y-2 text-gray-300">
              <li>• Full Stack Development with Angular & .NET</li>
              <li>• Cross-Platform API Development</li>
              <li>• Enterprise Security Solutions</li>
              <li>• Cloud & On-Premise Deployment</li>
            </ul>
          </div>
          <div class="experience-item bg-gray-800/50 p-6 rounded-xl hover:bg-gray-800/70 transition-all duration-300">
            <h3 class="text-xl font-semibold mb-4 text-purple-400">Specializations</h3>
            <ul class="space-y-2 text-gray-300">
              <li>• Security & Authentication Systems</li>
              <li>• Business Logic Implementation</li>
              <li>• Performance Optimization</li>
              <li>• Enterprise Architecture Design</li>
            </ul>
          </div>
        </div>

        <div class="bg-gray-800/50 p-6 rounded-xl" @fadeIn>
          <h3 class="text-xl font-semibold mb-4 text-blue-400">Professional Journey</h3>
          <div class="space-y-4 text-gray-300">
            <div class="border-l-2 border-purple-400 pl-4">
              <h4 class="text-lg font-semibold">Microworld Technologies Inc (eScan)</h4>
              <p class="text-sm text-gray-400">Current Position - Software Developer</p>
              <p class="mt-2">Working on enterprise security solutions and AI integration projects.</p>
            </div>
            <div class="border-l-2 border-blue-400 pl-4">
              <h4 class="text-lg font-semibold">L&T Defence (via Fabtech)</h4>
              <p class="text-sm text-gray-400">Previous Position - Software Developer</p>
              <p class="mt-2">Developed defense-grade software solutions and security systems.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
})
export class AboutComponent {}