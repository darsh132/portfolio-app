import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, RouterModule } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common'; // Import CommonModule for ngClass
import { HomeComponent } from './app/home/home.component';
import { AboutComponent } from './app/about/about.component';
import { ProjectsComponent } from './app/projects/projects.component';
import { ContactComponent } from './app/contact/contact.component';
import { CvComponent } from './app/cv/cv.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, CommonModule], // Add CommonModule here
  template: `
    <div class="min-h-screen bg-gray-900 text-white">
      <!-- Header -->
      <header class="fixed w-full bg-gray-800/90 backdrop-blur-md z-50 shadow-lg">
        <nav class="container mx-auto px-6 py-4">
          <div class="flex items-center justify-between">
            <!-- Logo or Title -->
            <h1 class="text-2xl font-extrabold text-gradient bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Darshan Bane
            </h1>

            <!-- Hamburger Button -->
            <button
              class="text-gray-300 md:hidden focus:outline-none focus:ring-2 focus:ring-purple-400"
              aria-label="Toggle Menu"
              (click)="toggleMenu()"
            >
              <svg
                class="h-7 w-7"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>

            <!-- Navigation Links -->
            <div
              [ngClass]="{'hidden': !isMenuOpen, 'flex': isMenuOpen, 'md:flex': true}"
              class="flex-col md:flex-row md:items-center md:space-x-8 space-y-4 md:space-y-0 text-gray-300 text-sm md:text-base"
            >
              <ul class="flex flex-col md:flex-row md:space-x-8 space-y-4 md:space-y-0">
                <li>
                  <a
                    routerLink="/"
                    class="hover:text-purple-400 transition-colors px-3 py-1 rounded-md hover:bg-gray-700"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    routerLink="/about"
                    class="hover:text-purple-400 transition-colors px-3 py-1 rounded-md hover:bg-gray-700"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    routerLink="/projects"
                    class="hover:text-purple-400 transition-colors px-3 py-1 rounded-md hover:bg-gray-700"
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    routerLink="/cv"
                    class="hover:text-purple-400 transition-colors px-3 py-1 rounded-md hover:bg-gray-700"
                  >
                    CV
                  </a>
                </li>
                <li>
                  <a
                    routerLink="/contact"
                    class="hover:text-purple-400 transition-colors px-3 py-1 rounded-md hover:bg-gray-700"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <!-- Main Content -->
      <main class="pt-24 md:pt-20">
        <div class="container mx-auto px-6 py-10">
          <router-outlet></router-outlet>
        </div>
      </main>

      <!-- Footer -->
      <footer class="bg-gray-800 mt-10 py-6">
        <div class="container mx-auto px-6 text-center">
          <p class="text-gray-400 text-sm">
            © 2025 Darshan Bane. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  `,
})
export class App {
  isMenuOpen: boolean = false;

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }
}

const routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'cv', component: CvComponent },
];

bootstrapApplication(App, {
  providers: [
    provideRouter(routes), // Registers the router with the application
    provideAnimations(), // Enables Angular animations
  ],
}).catch((err) => console.error(err));
