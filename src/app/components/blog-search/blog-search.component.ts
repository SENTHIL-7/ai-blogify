import { Component, OnInit } from '@angular/core';
import { Blog, BLOGS } from '../../constants/blog.constants';
import { BlogCardComponent } from "../blog-card/blog-card.component";
import { FormsModule } from '@angular/forms';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-blog-search',
  standalone: true,
  imports: [BlogCardComponent,FormsModule],
  templateUrl: './blog-search.component.html',
  styleUrl: './blog-search.component.scss'
})
export class BlogSearchComponent implements OnInit  {
  constructor(private blogService: BlogService) {
    
  }
  searchQuery: string = '';
  blogs!: Blog[] ;
  filteredBlogs!: Blog[];
  
  pageSize = 6; // Number of blogs per page
  currentPage = 1;
  paginatedBlogs:Blog[] = [];
  totalPages = 1;
  /**
   * Lifecycle hook to initialize the component
   */
  ngOnInit(): void {

    this.blogService.getBloglist().subscribe((data:any) => {
      console.log('getBloglist',data);
      this.blogs = data;
      this.filteredBlogs=this.blogs;
          /**
     * Calculate the total number of pages based on the filtered blogs and the page size
     */
    this.totalPages = Math.ceil(this.filteredBlogs.length / this.pageSize);
    /**
     * Update the paginated blogs based on the current page and the total number of pages
     */
    this.updatePaginatedBlogs();
    })
  }

   filterBlogs() {
    const searchQuery = this.searchQuery.toLowerCase();
    if (searchQuery) {
      this.filteredBlogs = this.blogs.filter(
        ({ title, excerpt }) =>
          title.toLowerCase().includes(searchQuery) ||
          // author.toLowerCase().includes(searchQuery) ||
          excerpt.toLowerCase().includes(searchQuery)
      );
    } else {
      this.filteredBlogs = this.blogs;
    }

    this.totalPages = Math.ceil(this.filteredBlogs.length / this.pageSize);
    this.currentPage = 1;
    this.updatePaginatedBlogs();
  }
  /**
   * Updates the paginated blogs based on the current page and the total number of pages
   *
   * Slices the filtered blogs array to get the blogs for the current page
   * and assigns them to the paginated blogs array
   *
   * @param {number} currentPage The current page number
   * @param {number} totalPages The total number of pages
   * @param {Blog[]} filteredBlogs The filtered blogs array
   * @param {number} pageSize The number of blogs per page
   */
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
