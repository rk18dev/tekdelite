import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { AuthService } from './authservice.service';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  candidatedetails = new Subject<string>();
  constructor(private authservice: AuthService) {

    this.setSession()
  }
  private setSession() {
    this.authservice.getCurrentUser().subscribe(data => {
      if (data)
        this.candidatedetails.next(data);
      else
        this.candidatedetails.next('');

    }, error => {
      this.candidatedetails.next("");
    })
  }

  syncSession() {
    this.setSession();
  }

}
