import { Component, Input } from '@angular/core';
import { Blog, BLOGS } from '../../constants/blog.constants';
import { DatePipe, NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-blog-card',
  standalone: true,
  imports: [DatePipe,RouterLink,NgOptimizedImage],
  templateUrl: './blog-card.component.html',
  styleUrl: './blog-card.component.scss'
})
export class BlogCardComponent {
  @Input()  blog!: Blog ;
}
