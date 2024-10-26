import { Component, OnInit } from '@angular/core';
import { Blog, BLOGS } from '../../constants/blog.constants';
import { BlogCardComponent } from "../blog-card/blog-card.component";

@Component({
  selector: 'app-blog-search',
  standalone: true,
  imports: [BlogCardComponent],
  templateUrl: './blog-search.component.html',
  styleUrl: './blog-search.component.scss'
})
export class BlogSearchComponent implements OnInit  {
  constructor() {
    
  }
  searchQuery: string = '';
  blogs: Blog[] = BLOGS;
  filteredBlogs: Blog[] = BLOGS;
  
  pageSize = 6; // Number of blogs per page
  currentPage = 1;
  paginatedBlogs:Blog[] = [];
  totalPages = 1;
  ngOnInit(): void {
    if(typeof window !== 'undefined'){
      // setInterval(() =>{
      //   console.log('Entering');
      //   // this.tem +=1
      // },1000)
    }
    this.totalPages = Math.ceil(this.filteredBlogs.length / this.pageSize);
    this.updatePaginatedBlogs();
  }
  onSearch(event:any){
     this.searchQuery=event?.target?.value;
  }

  // Method to filter blogs based on search query
  filterBlogs() {
    if (this.searchQuery) {
      this.filteredBlogs = this.blogs.filter(blog =>
        blog.title.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        blog.author.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        blog.excerpt.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    } else {
      this.filteredBlogs = this.blogs;
    }
    this.totalPages = Math.ceil(this.filteredBlogs.length / this.pageSize);
    this.currentPage=1;
    this.updatePaginatedBlogs()
  }
  updatePaginatedBlogs() {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.paginatedBlogs = this.filteredBlogs.slice(startIndex, endIndex);
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updatePaginatedBlogs();
    }
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updatePaginatedBlogs();
    }
  }
}
