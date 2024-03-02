import { Component } from '@angular/core';
import { OnboardusersComponent } from "../onboardusers/onboardusers.component";
import { NavbarComponent } from "../navbar/navbar.component";
import { ReadytoonboardComponent } from "../readytoonboard/readytoonboard.component";

@Component({
    selector: 'app-dashboard',
    standalone: true,
    templateUrl: './dashboard.component.html',
    styleUrl: './dashboard.component.css',
    imports: [OnboardusersComponent, NavbarComponent, ReadytoonboardComponent]
})
export class DashboardComponent {

}
