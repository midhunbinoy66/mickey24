import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {MatProgressBarModule} from '@angular/material/progress-bar';

@Component({
  selector: 'app-pomodoro',
  standalone: true,
  imports: [CommonModule,MatProgressBarModule],
  templateUrl: './pomodoro.component.html',
  styleUrl: './pomodoro.component.css'
})
export class PomodoroComponent {

  availableTime=[60,40,25]

  isRunning =false;
  minutes:number = 25;
  seconds:number = 0;
  interval:any;
  progressValue =100;


  startTimer(){
    if(this.isRunning){
      clearInterval(this.interval);
    }else{
      this.interval = setInterval(()=>{
        if(this.seconds ==0){
          if(this.minutes>0){
            this.minutes--;
            this.progressValue-=4; 
            this.seconds=59;
          }else{
            clearInterval(this.interval)
            this.progressValue = 100;
          }
        }else{
          this.seconds--;
        }
      },1000)
    }
    this.isRunning = !this.isRunning;
  }

  reset() {
    clearInterval(this.interval);
    this.minutes = 25;
    this.seconds = 0;
    this.progressValue =100;
    this.isRunning = false;
  }
}
