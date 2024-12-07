import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../../services/blog.service';
import { AdminBlogService } from '../../../services/admin-blog.service';
import { Blog } from '../../../constants/blog.constants';
import { Router } from '@angular/router';
@Component({
  selector: 'app-blog-list',
  standalone: true,
  imports: [ ],
  templateUrl: './blog-list.component.html',
  styleUrl: './blog-list.component.scss'
})
export class BlogListComponent implements OnInit {
  blogs:any =[];
  constructor(private adminBlogService: AdminBlogService,private router : Router) { }
  ngOnInit(){
    console.log('blogs',this.blogs);
    this.adminBlogService.getBloglist().subscribe({
      next :(value:any) =>{
          this.blogs = value;
          console.log('blogs',this.blogs);
      },
      error : (err)=> {
        console.error(err);
      }
    })
  }
  deleteBlog(blog:Blog){
    this.adminBlogService.deleteBlog(blog.id).subscribe({
      next :(value:any) =>{
        this.blogs = this.blogs.filter((b:Blog) => b.id !== blog.id);
        console.log('blogs',this.blogs);    
      },
      error : (err:any)=> {
        console.error(err);
      }
      })
  }
  editBlog(blog:any){ 
    this.router.navigate(['admin/edit-blog',blog.id]);
  }
}
