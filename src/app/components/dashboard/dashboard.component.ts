import { Component } from '@angular/core';
import { PomodoroComponent } from '../pomodoro/pomodoro.component';
import { TasksComponent } from '../tasks/tasks.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [PomodoroComponent,TasksComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
