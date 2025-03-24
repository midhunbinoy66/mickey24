import { Component, inject, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,RouterLink,],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{

  user$!:Observable<any>

  constructor(
    private router:Router,
    private authService:AuthService
  ){

  }

  ngOnInit(): void {
    this.user$ = this.authService.user$;
  }

  login() {
    this.authService.loginWithGoogle();
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['login'])
  }


}
