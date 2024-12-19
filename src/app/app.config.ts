import {  ApplicationConfig, inject, PLATFORM_ID, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import {  HttpErrorResponse, provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getFunctions, provideFunctions } from '@angular/fire/functions';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { AuthConfigService } from './services/auth-config.service';
import { isPlatformBrowser } from '@angular/common';
import { AuthService } from './auth/services/auth.service';
import { catchError, throwError } from 'rxjs';
  
export function tokenInterceptor(request:any, next:any) {
  const authService = inject(AuthService);
  const token = authService.getToken();
  
  if (token) {
    const clonedRequest = request.clone({
      setHeaders: {
        Authorization: token
      }
    });
    return next(clonedRequest).pipe(catchError((err) => {
      if (err instanceof HttpErrorResponse && err.status === 401) {
        authService.logout();
      }
      return throwError(()=>err);
  }));;
  }
  return next(request)
  }
 
export function initializeAppAuth(authConfigService: AuthConfigService) {
  return () => authConfigService.configureAuth();
}
export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(withFetch(),withInterceptors([tokenInterceptor])),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(withEventReplay()), provideFirebaseApp(() => initializeApp()), provideAuth(() => getAuth()), provideFirestore(() => getFirestore()), provideFunctions(() => getFunctions()), provideStorage(() => getStorage()),
    AuthConfigService,
  ]
};