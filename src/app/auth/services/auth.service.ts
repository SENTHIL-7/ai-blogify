import { Inject, Injectable, makeStateKey, PLATFORM_ID, signal, TransferState } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { environment } from '../../../environments/environment.development';
import { Router } from '@angular/router';
import { isPlatformServer, isPlatformBrowser } from '@angular/common';
const TOKEN_KEY = makeStateKey<string>('auth_token');
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = signal(false);
  constructor(private http: HttpService,private router: Router, @Inject(PLATFORM_ID) private platformId: Object,
  private transferState: TransferState) { }
  login(data:any){
    return this.http.post('login',data).subscribe({
      next: (response:any) => {
        console.log('Login successful:', response);
        // Handle successful login here
        this.setToken(response.token);
        this.isLoggedIn.set(true);
        this.router.navigate(['admin','dashboard']);
      },
      error: (error) => {
        console.error('Login failed:', error);
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
    if (isPlatformServer(this.platformId)) {
      // On server, store token in transfer state
      this.transferState.set(TOKEN_KEY, token);
    } else if (isPlatformBrowser(this.platformId)) {
      // On client, store in localStorage
      localStorage.setItem('auth_token', token);
    }
  }

  getToken(): string | null {
    if (isPlatformServer(this.platformId)) {
      // Retrieve token from transfer state on server
      return this.transferState.get(TOKEN_KEY, null);
    } else {
      // Retrieve from localStorage on client
      return localStorage.getItem('auth_token');
    }
  }
  removeToken():void {
    if (isPlatformServer(this.platformId)) {
      this.transferState.remove(TOKEN_KEY,);
    } else {
     localStorage.removeItem('auth_token');
    }
  }
}
