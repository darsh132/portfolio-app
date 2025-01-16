import { Component } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-cv',
  standalone: true,
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('0.6s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ],
  template: `
    <div class="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-4 md:p-8" @fadeIn>
      <div class="max-w-6xl mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <!-- Profile Section -->
          <div class="lg:col-span-1">
            <div class="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl p-6 backdrop-blur-sm border border-gray-700/30">
              <div class="flex flex-col items-center">
                <div class="w-48 h-48 rounded-full overflow-hidden mb-6 ring-4 ring-purple-500/30">
                <img 
  src="assets/darshan.gif" 
  alt="Darshan Bane"
  class="w-full h-full object-cover"
/>

                </div>
                <h2 class="text-2xl font-bold text-white mb-2">Darshan Bane</h2>
                <p class="text-gray-400 mb-6">Full Stack Developer</p>
                <div class="flex space-x-4 mb-6">
  <!-- LinkedIn -->
  <a 
    href="https://www.linkedin.com/in/darshan-bane-06b414216/" 
    target="_blank" 
    rel="noopener noreferrer"
    class="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-lg transition-colors"
    aria-label="LinkedIn"
  >
    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  </a>

  <!-- GitHub -->
  <a 
    href="https://github.com/darsh132" 
    target="_blank" 
    rel="noopener noreferrer"
    class="bg-gray-700 hover:bg-gray-600 text-white p-2 rounded-lg transition-colors"
    aria-label="GitHub"
  >
    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  </a>

  <!-- Instagram -->
  <a 
    href="https://instagram.com/bane.darshan2" 
    target="_blank" 
    rel="noopener noreferrer"
    class="bg-gray-800 hover:bg-gray-700 text-white p-2 rounded-lg transition-colors"
    aria-label="Instagram"
  >
    <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 30 30" aria-hidden="true">
      <path d="M9.9980469 3C6.1390469 3 3 6.1419531 3 10.001953L3 20.001953C3 23.860953 6.1419531 27 10.001953 27L20.001953 27C23.860953 27 27 23.858047 27 19.998047L27 9.9980469C27 6.1390469 23.858047 3 19.998047 3L9.9980469 3zM22 7C22.552 7 23 7.448 23 8C23 8.552 22.552 9 22 9C21.448 9 21 8.552 21 8C21 7.448 21.448 7 22 7zM15 9C18.309 9 21 11.691 21 15C21 18.309 18.309 21 15 21C11.691 21 9 18.309 9 15C9 11.691 11.691 9 15 9zM15 11A4 4 0 0 0 11 15A4 4 0 0 0 15 19A4 4 0 0 0 19 15A4 4 0 0 0 15 11z" />
    </svg>
  </a>
</div>

              </div>
            </div>
          </div>

          <!-- CV Preview Section -->
          <div class="lg:col-span-2">
            <div class="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl p-6 backdrop-blur-sm border border-gray-700/30">
              <div class="flex justify-between items-center mb-6">
                <h3 class="text-2xl font-bold text-white">Curriculum Vitae</h3>
                <a 
                  href="/assets/Darshan_Bane_CV.pdf" 
                  target="_blank"
                  class="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
                >
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
                  </svg>
                  <span>Download CV</span>
                </a>
              </div>
              
              <div class="bg-gray-900/50 rounded-lg p-4 mb-6">
                <h4 class="text-lg font-semibold text-blue-400 mb-4">Professional Summary</h4>
                <p class="text-gray-300 leading-relaxed">
                  Full Stack Developer with expertise in Angular, .NET Core, and enterprise security solutions. 
                  Currently working at Microworld Technologies Inc (eScan), focusing on cybersecurity and AI integration projects.
                </p>
              </div>

              <div class="bg-gray-900/50 rounded-lg p-4 mb-6">
                <h4 class="text-lg font-semibold text-purple-400 mb-4">Technical Skills</h4>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h5 class="text-white mb-2">Frontend</h5>
                    <ul class="space-y-2 text-gray-300">
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
                        JavaScript/TypeScript
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h5 class="text-white mb-2">Backend</h5>
                    <ul class="space-y-2 text-gray-300">
                      <li class="flex items-center">
                        <span class="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                        .NET Core MVC
                      </li>
                      <li class="flex items-center">
                        <span class="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                        SQL Server
                      </li>
                      <li class="flex items-center">
                        <span class="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                        RESTful APIs
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div class="bg-gray-900/50 rounded-lg p-4">
                <h4 class="text-lg font-semibold text-blue-400 mb-4">Experience</h4>
                <div class="space-y-6">
                  <div>
                    <h5 class="text-white font-medium">Software Developer</h5>
                    <p class="text-purple-400">Microworld Technologies Inc (eScan)</p>
                    <p class="text-gray-400 text-sm">Current Position</p>
                    <ul class="mt-2 space-y-2 text-gray-300">
                      <li class="flex items-start">
                        <span class="w-2 h-2 bg-blue-400 rounded-full mr-3 mt-2"></span>
                        <span>Developing enterprise security solutions and AI integration projects</span>
                      </li>
                      <li class="flex items-start">
                        <span class="w-2 h-2 bg-blue-400 rounded-full mr-3 mt-2"></span>
                        <span>Leading frontend development using Angular</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h5 class="text-white font-medium">Software Developer</h5>
                    <p class="text-purple-400">L&T Defence (via Fabtech)</p>
                    <p class="text-gray-400 text-sm">Previous Position</p>
                    <ul class="mt-2 space-y-2 text-gray-300">
                      <li class="flex items-start">
                        <span class="w-2 h-2 bg-purple-400 rounded-full mr-3 mt-2"></span>
                        <span>Developed defense-grade software solutions</span>
                      </li>
                      <li class="flex items-start">
                        <span class="w-2 h-2 bg-purple-400 rounded-full mr-3 mt-2"></span>
                        <span>Implemented security systems and protocols</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
})
export class CvComponent {}