import { Component } from '@angular/core';
import { LoginComponent } from "../login/login.component";
import { AuthComponent } from "../authcomponent/authcomponent.component";

@Component({
    selector: 'app-usersigning',
    standalone: true,
    templateUrl: './usersigning.component.html',
    styleUrl: './usersigning.component.css',
    imports: [LoginComponent, AuthComponent]
})
export class UsersigningComponent {

}
