import { Component } from '@angular/core';
import { AuthConfigService } from '../../../services/auth-config.service';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  // styleUrl: './login.component.scss'
  styleUrl: '../signup/signup.component.scss'
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  // constructor(private authService: AuthConfigService) {}

  onEmailLogin() {
    // Implement email and password login logic here
    console.log('Logging in with Email:', this.email, this.password);
  }

  loginWithOAuth() {
    // this.authService.login(); // OAuth login
  }
}
