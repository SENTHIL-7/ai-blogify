import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './login.component.html',
  // styleUrl: './login.component.scss'
  styleUrl: '../signup/signup.component.scss'
})
export class LoginComponent {
  // email: string = '';
  // password: string = '';
  loginForm!:FormGroup;
  constructor(private formBuilder: FormBuilder,private authService: AuthService) { }
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });

  }
  // constructor(private authService: AuthConfigService) {}

  onEmailLogin() {
    // Implement email and password login logic here
    console.log('Logging in with Email:', this.loginForm.value);
    if(this.loginForm.valid){
      this.authService.login(this.loginForm.value).subscribe({
        next: (response) => {
          console.log('Login successful:', response);
          // Handle successful login here
        },
        error: (error) => {
          console.error('Login failed:', error);
          // Handle login error here
        }
      });
    }
    else{
      alert('Invalid form');
    }
  }

  loginWithOAuth() {
    // this.authService.login(); // OAuth login
  }
}
