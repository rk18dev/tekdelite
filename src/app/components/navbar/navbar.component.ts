import { Component, DoCheck, OnInit } from '@angular/core';
import { Route, Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/authservice.service';
import { SessionService } from '../../services/session.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {

  loggedIn: boolean = true;
  userName!: string | null

  constructor(private authservice: AuthService, private router: Router, private sessionservice: SessionService) {
    this.setSession();
  }
  ngOnInit(): void {
    if (this.authservice.getCurrentUser()) {
      this.authservice.getCurrentUser().subscribe(data => {
        this.userName = data;
      })
    }
  }

  private setSession() {
    this.sessionservice.candidatedetails.subscribe(data => {
      this.userName = data;
    })
  }


  logout() {

    this.authservice.signOut();
    this.sessionservice.syncSession();
  }
}
