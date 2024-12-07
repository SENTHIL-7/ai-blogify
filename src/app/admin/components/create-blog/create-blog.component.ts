import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { QuillEditorComponent } from 'ngx-quill';
import { AdminBlogService } from '../../../services/admin-blog.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-create-blog',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule,QuillEditorComponent],
  templateUrl: './create-blog.component.html',
  styleUrl: './create-blog.component.scss'
})
export class CreateBlogComponent implements OnInit  {
  blogForm: FormGroup ;
  blogId!:number;
  quillModules = {
    toolbar: [
      ['bold', 'italic', 'underline', 'strike'],
      ['blockquote', 'code-block'],
      [{ list: 'ordered' }, { list: 'bullet' }],
      [{ indent: '-1' }, { indent: '+1' }],
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      [{ color: [] }, { background: [] }],
      ['link', 'image', 'video']
    ]
  };

  constructor(private fb: FormBuilder, private adminBlogService: AdminBlogService,private route: ActivatedRoute ) {
    this.blogForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(5)]],
      excerpt: ['', [Validators.required, Validators.maxLength(150)]],
      content: ['', [Validators.required, Validators.minLength(20)]],
      image_url: [''],
      tags: ['']
    });
  }

  ngOnInit(): void {
      this.blogId = +(this.route?.snapshot?.paramMap?.get('id') ?? 0);
      if(this.blogId){
        this.adminBlogService.getBlog(this.blogId).subscribe({
          next: (response:any) => {
            this.blogForm.patchValue(response);
          },
          error: (error:any) => {
            console.error('Error fetching blog:', error);
          }
        });
      }
  }
  onSubmit() {
    if (this.blogForm.valid) {
      const newBlog = this.blogForm.value;
      if(this.blogId){
        this.adminBlogService.updateBlog(this.blogId,newBlog).subscribe({
          next: (response) => {
            console.log('Blog updated successfully:', response);
            this.blogForm.reset();
            alert('Blog updated successfully!');  
          },
          error: (error) => {
            console.error('Error updating blog:', error);
            if (error.status === 404) {
              alert('Blog not found.'); 
          }
          }
        })
      }
      else{
        this.adminBlogService.createBlog(newBlog).subscribe({
          next: (response) => {
            console.log('Blog created successfully:', response);
            this.blogForm.reset();
            alert('Blog created successfully!');
          },
          error: (error) => {
            console.error('Error creating blog:', error);
          }
        })
      }
    } else {
      alert('Please fill all required fields.');
    }
  }
}
