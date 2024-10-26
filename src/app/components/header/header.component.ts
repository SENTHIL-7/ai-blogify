import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { AuthConfigService } from '../../services/auth-config.service';

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

  // constructor(private authService: AuthConfigService, private router: Router) {}
  constructor( private router: Router) {}

  ngOnInit() {
    // Check if the user is logged in
    // this.isLoggedIn = this.authService.isLoggedIn;
    
    if (this.isLoggedIn) {
      // Get user profile image from the AuthService or user data
      // this.userProfileImage = this.authService.getUserProfileImage();
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
  toggleNavbar(){

  }
}
