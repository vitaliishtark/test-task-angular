import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit, ViewChild } from '@angular/core';
import { AuthService } from "../auth/auth.service";
import { Router, RouterLink, RouterOutlet } from "@angular/router";
import { MatSidenav, MatSidenavContainer } from "@angular/material/sidenav";
import { MatListItem, MatNavList } from "@angular/material/list";
import { MatToolbar } from "@angular/material/toolbar";
import { MatIcon } from "@angular/material/icon";
import { MatAnchor, MatButton, MatIconButton } from "@angular/material/button";
import { BreakpointObserver } from "@angular/cdk/layout";
import { Observable } from "rxjs";
import { AngularFirestore } from "@angular/fire/compat/firestore";
import { DashboardService } from "../services/dashboard.service";
import { JsonPipe, NgIf } from "@angular/common";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatNavList,
    MatListItem,
    MatToolbar,
    MatIcon,
    MatSidenav,
    MatIconButton,
    MatButton,
    MatAnchor,
    RouterLink,
    MatSidenavContainer,
    JsonPipe,
    NgIf,
    RouterOutlet
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class HomeComponent implements OnInit {
  isSidebarOpen = true;
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
  data: any
  constructor(private authService: AuthService, private router: Router,  private dashboardService: DashboardService) {}

  ngOnInit() {
    this.dashboardService.getDashboardData().subscribe(data => {
      this.data = data;
    });
  }


  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  async signOut() {
    try {
      await this.authService.logout();
      this.router.navigate(['/login']);
    } catch (error) {
      console.error('Sign out error', error);
    }
  }

  goTo(page: string){
    this.router.navigate([`/home/${page}`]);
    this.toggleSidebar()
  }
}
