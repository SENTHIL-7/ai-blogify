import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// PrimeNG Components
import { PanelMenuModule } from 'primeng/panelmenu';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { TableModule } from 'primeng/table';
import { MenuItem } from 'primeng/api';
@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [RouterOutlet,PanelMenuModule,
    CardModule,
    ButtonModule,
    InputTextModule,
    InputTextareaModule,
    TableModule,
],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent {
  menuItems: MenuItem[];

  constructor() {
    this.menuItems = [
      { label: 'Dashboard', icon: 'pi pi-home', routerLink: 'dashboard' },
      { label: 'Create Blog', icon: 'pi pi-pencil', routerLink: 'create-blog' },
      { label: 'Blog List', icon: 'pi pi-list', routerLink: 'blog-list' },
    ];
  }
}
