import { Component } from '@angular/core';
import { AuthConfigService } from '../../../services/auth-config.service';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
  email: string = '';
  password: string = '';

  // constructor(private authService: AuthConfigService) {}

  onEmailSignup() {
    // Implement email and password signup logic here
    console.log('Signing up with Email:', this.email, this.password);
  }

  signUpWithOAuth() {
    // this.authService.login(); // OAuth sign-up
  }
}
