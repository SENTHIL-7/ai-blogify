import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-blog',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './create-blog.component.html',
  styleUrl: './create-blog.component.scss'
})
export class CreateBlogComponent {
  blogForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.blogForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(5)]],
      excerpt: ['', [Validators.required, Validators.maxLength(150)]],
      content: ['', [Validators.required, Validators.minLength(20)]],
      imageUrl: [''],
      tags: ['']
    });
  }

  onSubmit() {
    if (this.blogForm.valid) {
      const newBlog = this.blogForm.value;
      console.log('New Blog:', newBlog);
      // Submit new blog data to the backend here
      this.blogForm.reset();
      alert('Blog created successfully!');
    } else {
      alert('Please fill all required fields.');
    }
  }
}
