import { Component } from '@angular/core';
import { trigger, transition, style, animate, query, stagger, keyframes } from '@angular/animations';

@Component({
  selector: 'app-projects',
  standalone: true,
  animations: [
    trigger('staggerProjects', [
      transition(':enter', [
        query('.project-card', [
          style({ opacity: 0, transform: 'scale(0.95) translateY(30px)' }),
          stagger(100, [
            animate('0.6s cubic-bezier(0.35, 0, 0.25, 1)', 
              keyframes([
                style({ opacity: 0, transform: 'scale(0.95) translateY(30px)', offset: 0 }),
                style({ opacity: 0.5, transform: 'scale(0.97) translateY(15px)', offset: 0.3 }),
                style({ opacity: 1, transform: 'scale(1) translateY(0)', offset: 1 })
              ]))
          ])
        ])
      ])
    ])
  ],
  template: `
    <div class="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white p-8">
      <div class="max-w-6xl mx-auto">
        <div class="relative mb-16">
          <div class="absolute -top-20 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
          <h2 class="text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-blue-400 animate-gradient">
            Professional Experience & Projects
          </h2>
        </div>
        
        <div class="mb-16 bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-xl backdrop-blur-sm border border-gray-700/30">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div class="space-y-6">
              <h3 class="text-2xl font-semibold text-blue-400 flex items-center">
                <svg class="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clip-rule="evenodd"/>
                  <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"/>
                </svg>
                Current Role
              </h3>
              <div class="text-gray-300">
                <p class="text-xl mb-2">
                  <span class="text-purple-400">Company:</span> Microworld Technologies Inc (eScan)
                </p>
                <p class="text-xl mb-4">
                  <span class="text-purple-400">Position:</span> Software Developer
                </p>
              </div>
            </div>
            
            <div class="space-y-6">
              <h3 class="text-2xl font-semibold text-purple-400 flex items-center">
                <svg class="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 01-1.581.814l-4.419-3.35-4.419 3.35A1 1 0 014 16V4zm2-1h8a1 1 0 011 1v10.69l-3.419-2.592a1 1 0 00-1.162 0L7 14.69V4a1 1 0 011-1z" clip-rule="evenodd"/>
                </svg>
                Previous Experience
              </h3>
              <div class="text-gray-300">
                <p class="text-xl mb-2">
                  <span class="text-blue-400">Company:</span> L&T Defence (via Fabtech)
                </p>
                <p class="text-xl mb-4">
                  <span class="text-blue-400">Position:</span> Software Developer
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" @staggerProjects>
          @for (project of projects; track project.id) {
            <div class="project-card group bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl overflow-hidden hover:from-gray-800/60 hover:to-gray-900/60 transition-all duration-300 transform hover:scale-105 hover:shadow-xl border border-gray-700/30">
              <div class="relative overflow-hidden">
                <img [src]="project.image" [alt]="project.title" class="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500">
                <div class="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
              </div>
              <div class="p-6">
                <h3 class="text-xl font-semibold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                  {{project.title}}
                </h3>
                <p class="text-gray-300 mb-4">{{project.description}}</p>
                <div class="flex flex-wrap gap-2 mb-4">
                  @for (tech of project.technologies; track tech) {
                    <span class="px-3 py-1 bg-gray-700/50 rounded-full text-sm text-gray-300 border border-gray-600/30">
                      {{tech}}
                    </span>
                  }
                </div>
                @if (project.achievements) {
                  <div class="mt-4">
                    <h4 class="text-sm font-semibold text-purple-400 mb-2">Key Achievements:</h4>
                    <ul class="space-y-2 text-gray-300">
                      @for (achievement of project.achievements; track achievement) {
                        <li class="flex items-start">
                          <span class="w-2 h-2 bg-blue-400 rounded-full mr-3 mt-2"></span>
                          <span class="flex-1">{{achievement}}</span>
                        </li>
                      }
                    </ul>
                  </div>
                }
              </div>
            </div>
          }
        </div>
      </div>
    </div>
  `
})
export class ProjectsComponent {
  projects = [
    {
      id: 1,
      title: 'Phishing Simulation Platform',
      description: 'Enterprise-grade phishing simulation platform for security awareness training.',
      image: 'https://picsum.photos/400/300?random=1',
      technologies: ['Angular', '.NET Core', 'SQL Server', 'Azure'],
      achievements: [
        'Implemented realistic phishing templates',
        'Analytics dashboard for training effectiveness',
        'Automated campaign management'
      ]
    },
    {
      id: 2,
      title: 'OpenAI Integration Dashboard',
      description: 'Controlled AI environment with admin dashboard for enterprise use.',
      image: 'https://picsum.photos/400/300?random=2',
      technologies: ['Angular', '.NET 6', 'OpenAI API', 'Redis'],
      achievements: [
        'Role-based access control',
        'Usage monitoring and analytics',
        'Custom model fine-tuning interface'
      ]
    },
    {
      id: 3,
      title: 'Cross-Platform API Framework',
      description: 'Unified API solution with multi-platform deployment support.',
      image: 'https://picsum.photos/400/300?random=3',
      technologies: ['.NET Core', 'IIS 10', 'Apache', 'Docker'],
      achievements: [
        'Cross-platform compatibility',
        'Automated deployment pipelines',
        'Load balancing configuration'
      ]
    },
    {
      id: 4,
      title: 'Vulnerability Management Dashboard',
      description: 'Comprehensive security vulnerability tracking and management system.',
      image: 'https://picsum.photos/400/300?random=4',
      technologies: ['Angular', '.NET Core', 'SQL Server', 'Redis'],
      achievements: [
        'Real-time vulnerability tracking',
        'Risk assessment automation',
        'Integration with security tools'
      ]
    },
    {
      id: 5,
      title: 'Anti-Theft Portal',
      description: 'Enterprise anti-theft system with SSO integration.',
      image: 'https://picsum.photos/400/300?random=5',
      technologies: ['Angular', '.NET 6', 'OAuth 2.0', 'Azure AD'],
      achievements: [
        'SSO implementation',
        'Real-time monitoring',
        'Incident response automation'
      ]
    },
    {
      id: 6,
      title: 'Enterprise Business Logic Engine',
      description: 'Complex business rules processing system for web applications.',
      image: 'https://picsum.photos/400/300?random=6',
      technologies: ['.NET Core', 'Angular', 'SQL Server', 'Redis'],
      achievements: [
        'Rule engine optimization',
        'Performance monitoring',
        'Scalable architecture design'
      ]
    }
  ];
}