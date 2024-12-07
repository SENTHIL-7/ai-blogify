import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http :HttpClient) { }

  get(url :string,queryParams ?:any){
    return this.http.get(environment.backendUrl+url,{params :queryParams});
  }
  post(url :string,data :any,queryParams ?:any){
    return this.http.post(environment.backendUrl+url,data,{params :queryParams});    
  }
  delete(url :string){  
    return this.http.delete(environment.backendUrl+url);
  }
  put(url :string,data :any,queryParams ?:any){
    return this.http.put(environment.backendUrl+url,data,{params :queryParams});  
  }
}
