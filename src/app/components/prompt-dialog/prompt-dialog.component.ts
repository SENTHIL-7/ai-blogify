import {
  Component,
  effect,
  inject,
  input,
  model,
  output,
  signal,
  viewChild,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BlogGenerationService } from '../../services/blog-generation.service';

@Component({
  selector: 'app-prompt-dialog',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './prompt-dialog.component.html',
  styleUrl: './prompt-dialog.component.scss',
})
export class PromptDialogComponent {
  showPrompt = model(false);
  response = '';
  onApply: any = output();
  readonly blogContent = input('');
  promptText: string = '';

  resultContainer: any = viewChild('resultContainer');
  generateBlogService = inject(BlogGenerationService);
  isGenerating = signal(false);
  constructor() {
    //   effect(() => {
    //     console.log('Prompt dialog visibility:', this.showPrompt());
    //   }
    // )
  }
  submitPrompt() {
    if (this.promptText.trim()) {
      this.isGenerating.set(true);
      const data = {
        prompt: this.promptText,
        blogContent: this.blogContent(),
      };
      this.generateBlogService.getGeneratedBlog(data).subscribe({
        next: (response: any) => {
          console.log('Blog generated text:', response.text);
          this.response = response.text;
          this.resultContainer().nativeElement.innerHTML = this.response;
          this.isGenerating.set(false);
        },
        error: (error: any) => {
          this.isGenerating.set(false);
          console.error('Error generating blog:', error);
          alert('Failed to generate blog. Please try again.');
        },
      });
    }
  }

  copyToClipboard() {
    const content = this.resultContainer().nativeElement.innerText;
    navigator.clipboard
      .writeText(content)
      .then(() => {
        alert('Copied to clipboard!');
      })
      .catch((err) => {
        alert('Failed to copy: ' + err);
      });
  }

  apply() {
    this.onApply.emit(this.response);
    this.showPrompt.set(false);
    this.response = '';
    this.promptText = '';
    this.isGenerating.set(false);
  }
  closePrompt() {
    this.showPrompt.set(false);
    this.promptText = '';
    this.response = '';
    this.isGenerating.set(false);
  }
}
