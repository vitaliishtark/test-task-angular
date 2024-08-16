import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getAuth, provideAuth } from "@angular/fire/auth";
import { environment } from "../environments/environment";
import { AuthGuard } from "@angular/fire/auth-guard";
import { getFirestore, provideFirestore } from "@angular/fire/firestore";
import { AngularFireModule, FIREBASE_OPTIONS } from '@angular/fire/compat';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HttpClientModule } from "@angular/common/http";
export const appConfig: ApplicationConfig = {

  providers: [
    { provide: FIREBASE_OPTIONS, useValue: environment.firebase },
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    provideAuth(() => getAuth()),
    importProvidersFrom(HttpClientModule),
    provideRouter(routes),
    AuthGuard, provideAnimationsAsync(),
  ]
};
