import { Component } from '@angular/core';
import { Blog, BLOGS } from '../../constants/blog.constants';
import { ActivatedRoute, Router } from '@angular/router';
import { DatePipe, NgOptimizedImage } from '@angular/common';
import { CommentsComponent } from '../comments/comments.component';

@Component({
  selector: 'app-blog-detail',
  standalone: true,
  imports: [DatePipe,NgOptimizedImage,CommentsComponent],
  templateUrl: './blog-detail.component.html',
  styleUrl: './blog-detail.component.scss'
})
export class BlogDetailComponent {
  blog: Blog | undefined;

  constructor(private route: ActivatedRoute ,private router: Router) {}

  ngOnInit(): void {
    // Get the blog ID from the route and find the corresponding blog
    const blogId = +this.route.snapshot.paramMap.get('id')!;
    this.blog = BLOGS.find(blog => blog.id === blogId);
        // If the blog is not found, navigate to the Page Not Found component
        if (!this.blog) {
          this.router.navigate(['/404']); // Adjust the path as needed
        }
  }
  goBack(): void {
    this.router.navigate(['/']); // Change this to navigate to the appropriate route, e.g., blog list
  }
}
