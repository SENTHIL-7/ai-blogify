import { Component } from '@angular/core';
@Component({
  selector: 'app-blog-list',
  standalone: true,
  imports: [ ],
  templateUrl: './blog-list.component.html',
  styleUrl: './blog-list.component.scss'
})
export class BlogListComponent {
  blogs:any =[];
  deleteBlog(blog:any){

  }
  editBlog(blog:any){   }
}
