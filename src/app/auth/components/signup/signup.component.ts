import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule,RouterLink,ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
  siginupForm = new FormGroup({
    name :  new FormControl('',Validators.required),
    email :  new FormControl('',[Validators.required , Validators.email]),
    password :  new FormControl('',[Validators.required,Validators.minLength(5)]),
  });
  constructor(private authService: AuthService) {}

  onEmailSignup() {
    // Implement email and password signup logic here
    // console.log('Signing up with Email:', this.email, this.password);
    if(this.siginupForm.valid){
      console.log(this.siginupForm.value);
      this.authService.signup(this.siginupForm.value);
    }
    else{
      alert('email or password is not valid');
    }
  }

  signUpWithOAuth() {
    // this.authService.login(); // OAuth sign-up
  }
}
