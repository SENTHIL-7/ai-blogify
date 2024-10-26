import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { AuthConfigService } from '../../services/auth-config.service';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isLoggedIn = true;
  userProfileImage = 'https://img.icons8.com/?size=100&id=52883&format=png&color=000000';
  dropdownOpen = false;
  isDarkMode = false;
  // constructor(private authService: AuthConfigService, private router: Router) {}
  constructor(private router: Router,@Inject(PLATFORM_ID) private platformId: Object) { }

  ngOnInit() {
    // Check if the user is logged in
    // this.isLoggedIn = this.authService.isLoggedIn;

    if (this.isLoggedIn) {
      // Get user profile image from the AuthService or user data
      // this.userProfileImage = this.authService.getUserProfileImage();
    }
    // Load saved theme preference
    if (isPlatformBrowser(this.platformId)) {
      const theme = localStorage.getItem('theme') || 'light';
      this.isDarkMode = theme === 'dark';
      document.documentElement.setAttribute('data-theme', theme);
    }
  }

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  navigateToLogin() {
    this.router.navigate(['/login']);
  }

  logout() {
    // this.authService.logout();
    this.isLoggedIn = false;
    this.router.navigate(['/']);
  }
  toggleNavbar() {

  }
  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    const newTheme = this.isDarkMode ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  }
}
