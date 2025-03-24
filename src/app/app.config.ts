import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import {provideFirebaseApp,initializeApp} from '@angular/fire/app'
import {getFirestore,provideFirestore} from '@angular/fire/firestore'
import { provideAnimations } from '@angular/platform-browser/animations';

import { routes } from './app.routes';
import { provideAuth } from '@angular/fire/auth';
import { getAuth } from '@firebase/auth';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { environment } from '../envrionments/environment';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideFirebaseApp(()=>initializeApp(environment.firebaseConfig)),
    provideFirestore(()=>getFirestore()),
    provideAuth(()=>getAuth()),
    provideAnimations(), provideAnimationsAsync()
    
  ]
};
