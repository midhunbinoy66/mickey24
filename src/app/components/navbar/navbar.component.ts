import { Component, inject } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DialogueComponent } from '../shared/dialogue/dialogue.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  authService = inject(AuthService);
  constructor(
    private router:Router,
    private dialog:MatDialog
  ){}

  handleImageError(event:Event){
    (event.target as HTMLImageElement).src = 'assets/mickey24.webp'
    console.log('fail event triggred..')
  }

  openDialog(){
    this.dialog.open(DialogueComponent,{
      data:{
        title: "Confirm Logout",
        message: "Are you sure you want to log out?",
        actionText: "Logout",
        onConfirm: () => this.authService.logout().then(()=>{
          this.router.navigate(['/login'])
        })
      }
    })
  }
}
