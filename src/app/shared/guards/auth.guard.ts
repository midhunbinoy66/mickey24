import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { map } from 'rxjs';

export const authGuard: CanActivateFn = (route, state) => {

    const auth = inject(AuthService);
    const router  = inject(Router);

    return auth.user$.pipe(
      map(user=>{
        if(user) return true;
        router.navigate(['/login']);
        return false;
      })
    )
};
