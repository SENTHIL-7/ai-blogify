import { Inject, Injectable, makeStateKey, PLATFORM_ID, signal, TransferState } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { Router } from '@angular/router';
import {  isPlatformBrowser } from '@angular/common';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = signal(false);
  user: any;
  constructor(private http: HttpService,private router: Router, @Inject(PLATFORM_ID) private platformId: Object,) { }
  login(data:any){
    return this.http.post('login',data).subscribe({
      next: (response:any) => {
        console.log('Login successful:', response);
        // Handle successful login here
        this.setToken(response.token);
        this.isLoggedIn.set(true);
        // this.router.navigate(['admin','dashboard']);
        this.router.navigate(['admin','blog-list']);
      },
      error: (error) => {
        console.error('Login failed:', error);
        alert('email or password is not valid');
        // Handle login error here
      }
    });;
  }
  logout(){
     this.isLoggedIn.set(false);
     this.removeToken();
     this.router.navigate(['login']);
  }
  isAuthenticated(){
    const token = this.getToken();
    if(token){
      this.isLoggedIn.set(true);
      return true;
    }
    this.isLoggedIn.set(false);
    return false;
  }
  setToken(token: string) {
   if (isPlatformBrowser(this.platformId)) {
      // On client, store in localStorage
      localStorage.setItem('auth_token', token);
    }
  }

  getToken(): string | null {
    if (isPlatformBrowser(this.platformId)) {
      return localStorage.getItem('auth_token');
    } 
    return null;
  }
  removeToken():void {
     if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem('auth_token');
    } 
  }

  signup(data:any){
    return this.http.post('signup',data).subscribe({
      next: (response:any) => {  
        console.log('Signin successful:', response);        
        // Handle successful login here 
        this.router.navigate(['login']);
      },  
      error: (error) => {
        console.error('Signin failed:', error);
        alert('email or password is not valid');
        // Handle login error here
      }
    });
      }
}
