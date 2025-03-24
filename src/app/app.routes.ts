import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { authGuard } from './shared/guards/auth.guard';

export const routes: Routes = [
    {
        path:'dashboard',
        canActivate:[authGuard],
        component:DashboardComponent
    },
    {
        path:'login',
        component:LoginComponent
    },
    {
        path:"",
        redirectTo:"dashboard",
        pathMatch:'full'
    },
    { path: '**', redirectTo: 'login' }
];
