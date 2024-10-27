import { Component } from '@angular/core';
import { PanelMenuModule } from 'primeng/panelmenu';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { TableModule } from 'primeng/table';
@Component({
  selector: 'app-blog-list',
  standalone: true,
  imports: [    PanelMenuModule,
    CardModule,
    ButtonModule,
    InputTextModule,
    InputTextareaModule,
    TableModule,
],
  templateUrl: './blog-list.component.html',
  styleUrl: './blog-list.component.scss'
})
export class BlogListComponent {
  blogs:any =[];
  deleteBlog(blog:any){

  }
  editBlog(blog:any){   }
}
