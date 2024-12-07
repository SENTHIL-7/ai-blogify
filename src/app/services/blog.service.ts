import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http: HttpService) {}
  getBloglist(queryParams ?:any){
    return this.http.get('blogList',queryParams);
  }
  getBlog(id :string){
    return this.http.get('blog/'+id);
  }

}
