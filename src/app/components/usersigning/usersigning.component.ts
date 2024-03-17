import { Component } from '@angular/core';
import { AuthComponent } from "../authcomponent/authcomponent.component";

@Component({
    selector: 'app-usersigning',
    standalone: true,
    templateUrl: './usersigning.component.html',
    styleUrl: './usersigning.component.css',
    imports: [ AuthComponent]
})
export class UsersigningComponent {

}
