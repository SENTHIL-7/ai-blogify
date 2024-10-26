import { DatePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
interface Comment {
  username: string;
  content: string;
  date: Date;
}

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [FormsModule,DatePipe],
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.scss',
})
export class CommentsComponent {
  @Input() blogId!: string | number;
  comments: Comment[] = [];
  newComment: string = '';
  username: string = '';

  ngOnInit() {
    // Mock fetching comments based on blogId
    this.fetchComments();
  }

  fetchComments() {
    // Replace this with actual service call to fetch comments
    this.comments = [
      { username: 'User1', content: 'Great blog!', date: new Date() },
      { username: 'User2', content: 'Very informative.', date: new Date() },
    ];
  }

  addComment() {
    if (this.newComment && this.username) {
      const comment: Comment = {
        username: this.username,
        content: this.newComment,
        date: new Date(),
      };
      this.comments.push(comment);
      this.newComment = '';
      this.username = '';
    }
  }
}
