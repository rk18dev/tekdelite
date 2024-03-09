import { Injectable } from '@angular/core';
import { AuthService } from './authservice.service';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService implements CanActivate {
  isloggedin: boolean = false
  constructor(private authService: AuthService, private router: Router) {



  }

  canActivate(): boolean {
    this.authService.getCurrentUser().subscribe(data => {
      if (data != null && data != undefined && data.length>0)
        this.isloggedin = true;
      else
        this.isloggedin = false;
    }, error => {
      this.isloggedin = false;
    })
    if (this.isloggedin) {
      return true;
    } else {
      // Redirect to the login page if not authenticated
      this.router.navigate(['/login']);
      return false;
    }
  }
}
