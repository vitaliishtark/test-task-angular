import { Routes } from '@angular/router';
import { LoginComponent } from "./auth/login/login.component";
import { RegisterComponent } from "./auth/register/register.component";
import { AuthGuard } from "@angular/fire/auth-guard";
import { HomeComponent } from "./home/home.component";
import { DashboardComponent } from "./dashbord/dashboard.component";

export const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {
    path: 'home', component: HomeComponent, canActivate: [AuthGuard], children: [
      {path: 'dashboard', component: DashboardComponent},
      {path: '*', redirectTo: '/', pathMatch: 'full'},
    ]
  },
  {path: '', redirectTo: '/login', pathMatch: 'full'},
];
