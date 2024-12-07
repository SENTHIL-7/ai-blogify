import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class AdminBlogService {

  constructor(private http: HttpService) {}
  createBlog(data :any){
    return this.http.post('admin/blog',data);
  }
  deleteBlog(id :number){
    return this.http.delete('admin/blog/'+id);
  }
  updateBlog(id :number,data :any){
    return this.http.put('admin/blog/'+id,data);
  }
  getBloglist(queryParams ?:any){
    return this.http.get('admin/bloglist',queryParams);
  }
  getBlog(id :number){
    return this.http.get('admin/blog/'+id);
  }
}
