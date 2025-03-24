import { Component, inject, OnInit } from '@angular/core';
import { Task, TaskServiceService } from '../../shared/services/task-service.service';
import { Observable } from 'rxjs';
import { ModalComponent } from '../modal/modal.component';
import { ModalService } from '../../shared/services/modal.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {MatSlideToggleModule} from '@angular/material/slide-toggle'
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar'
import { NgxPaginationModule } from 'ngx-pagination';


@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [ModalComponent,FormsModule,CommonModule,MatSlideToggleModule,MatSnackBarModule,NgxPaginationModule],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
  providers:[]
})
export class TasksComponent implements OnInit{

  tasks$!:Observable<Task[]>
  modalService = inject(ModalService);
  taskTitle='';
  taskDescription=''
  p=1;
  tasks: Task[] = [];

  constructor(
    private taskService:TaskServiceService,
    private matSnack:MatSnackBar
    
  ){}

  ngOnInit(): void {
    this.tasks$ = this.taskService.getTasks()
    this.tasks$.subscribe(data=>{
      const sortedData = data.sort((a,b)=>b.createdAt-a.createdAt);
      this.tasks=sortedData
    })

  }

  submitTask(){
    if(!this.taskTitle.trim()) return ;
    const task: Task = { title: this.taskTitle, description: this.taskDescription, createdAt: Date.now(),completed:false };
    this.taskService.addTask(task).then(()=>{
      this.modalService.closeModal();
      this.taskTitle='';
      this.taskDescription=''
      this.matSnack.open(`Task added successfully`,'Close',{duration:3000})
    })
  }

  updateTask(task:Task){
    const taskStatus = !task.completed;
    this.taskService.updateTask(task.id!,!task.completed).then(()=>{
      this.matSnack.open(`${task.title} marked as ${taskStatus ? 'completed':'pending'}`,'Close',{duration:3000})
    })  
   
  }

}
