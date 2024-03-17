import { Component } from '@angular/core';
import { OnboardusersComponent } from "../onboardusers/onboardusers.component";
import { NavbarComponent } from "../navbar/navbar.component";
import { ReadytoonboardComponent } from "../readytoonboard/readytoonboard.component";
import { SessionService } from '../../services/session.service';

@Component({
    selector: 'app-dashboard',
    standalone: true,
    templateUrl: './dashboard.component.html',
    styleUrl: './dashboard.component.css',
    imports: [OnboardusersComponent, NavbarComponent, ReadytoonboardComponent]
})
export class DashboardComponent {

    constructor(private sessionservice: SessionService) {
        this.sessionservice.syncSession();
    }
}
