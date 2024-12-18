import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BlogSearchComponent } from "./components/blog-search/blog-search.component";
import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BlogSearchComponent, HeaderComponent], 
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angularblog';
}
