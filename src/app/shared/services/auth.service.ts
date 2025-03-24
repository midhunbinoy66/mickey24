import { inject, Injectable } from '@angular/core';
import {Auth, GoogleAuthProvider, signInWithPopup, signOut, user} from '@angular/fire/auth'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private auth = inject(Auth);
  user$:Observable<any> = user(this.auth)


  constructor() { }

  async loginWithGoogle(){
    const provider =  new GoogleAuthProvider();
    return signInWithPopup(this.auth,provider);
  }

  async logout(){
    return signOut(this.auth);
  }
  
}
