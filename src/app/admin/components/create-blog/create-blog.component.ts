import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { QuillEditorComponent } from 'ngx-quill';
@Component({
  selector: 'app-create-blog',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule,QuillEditorComponent],
  templateUrl: './create-blog.component.html',
  styleUrl: './create-blog.component.scss'
})
export class CreateBlogComponent {
  blogForm: FormGroup ;
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
