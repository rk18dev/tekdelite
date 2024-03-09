import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { LoginComponent } from "./components/login/login.component";
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { routes } from './app.routes';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { LoadingBarComponent } from "./components/loading-bar/loading-bar.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, LoginComponent, DashboardComponent, NavbarComponent, LoadingBarComponent]
})
export class AppComponent {
  title = 'employe-manager';
}
