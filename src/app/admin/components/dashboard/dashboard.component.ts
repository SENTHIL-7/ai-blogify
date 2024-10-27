import { Component } from '@angular/core';
import { PanelMenuModule } from 'primeng/panelmenu';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { TableModule } from 'primeng/table';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [    PanelMenuModule,
    CardModule,
    ButtonModule,
    InputTextModule,
    InputTextareaModule,
    TableModule,
],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
