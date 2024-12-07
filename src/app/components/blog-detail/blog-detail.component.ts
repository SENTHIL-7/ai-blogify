import { Component } from '@angular/core';
import { Blog, BLOGS } from '../../constants/blog.constants';
import { ActivatedRoute, Router } from '@angular/router';
import { DatePipe, NgOptimizedImage } from '@angular/common';
import { CommentsComponent } from '../comments/comments.component';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-blog-detail',
  standalone: true,
  imports: [DatePipe,NgOptimizedImage,CommentsComponent],
  templateUrl: './blog-detail.component.html',
  styleUrl: './blog-detail.component.scss'
})
export class BlogDetailComponent {
  blog: Blog | undefined;

  constructor(private route: ActivatedRoute ,private router: Router,private blogService: BlogService) {}

  ngOnInit(): void {
    // Get the blog ID from the route and find the corresponding blog
    const blogId = +this.route.snapshot.paramMap.get('id')!;
    // this.blog = BLOGS.find(blog => blog.id === blogId);
    this.blogService.getBlog(blogId.toString()).subscribe((data:any) => {
      console.log('getBlog',data);
      this.blog = data;
    },(error) => {
      this.router.navigate(['/404']); 
    })
  }
  goBack(): void {
    this.router.navigate(['/']); // Change this to navigate to the appropriate route, e.g., blog list
  }
}
