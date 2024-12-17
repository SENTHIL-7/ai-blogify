import { Injectable } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpService) { }
  login(data:any){
    return this.http.post('login',data);
  }
}
