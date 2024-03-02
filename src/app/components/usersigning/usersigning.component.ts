import { Component } from '@angular/core';
import { LoginComponent } from "../login/login.component";

@Component({
    selector: 'app-usersigning',
    standalone: true,
    templateUrl: './usersigning.component.html',
    styleUrl: './usersigning.component.css',
    imports: [LoginComponent]
})
export class UsersigningComponent {

}
