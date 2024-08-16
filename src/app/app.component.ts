import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import 'firebase/firestore';
import { AngularFireModule } from "@angular/fire/compat";
import { environment } from "../environments/environment";
import { AngularFirestoreModule } from "@angular/fire/compat/firestore";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
  ],
  template: `<router-outlet></router-outlet>`,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor() {
    AngularFireModule.initializeApp(environment.firebase);
    AngularFirestoreModule;
  }
  title = 'angular-auth-firebase';
}
