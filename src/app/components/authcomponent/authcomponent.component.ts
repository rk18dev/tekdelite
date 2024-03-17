

import { Component } from '@angular/core';
import { AuthService } from '../../services/authservice.service' // Update the path
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SessionService } from '../../services/session.service';
import { LoadingBarComponent } from '../loading-bar/loading-bar.component';
import { LoadingService } from '../../services/loading.service';

@Component({
  selector: 'app-authcomponent',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './authcomponent.component.html',
  styleUrl: './authcomponent.component.css'
})
export class AuthComponent {


  errorMessage: string = '';
  formGroup!: FormGroup;
  formSubmited: boolean = false
  constructor(private authService: AuthService,
    private formbuilder: FormBuilder,
    private router: Router, private sessionservie: SessionService, private loadingService: LoadingService) {
    this.sessionservie.syncSession();
    this.formGroup = this.formbuilder.group({
      email: ["", Validators.required],
      password: ["", Validators.required],
    });

  }

  // signUp(): void {
  //   this.authService.signUp(this.email, this.password)
  //     .then(() => {
  //       // Sign up successful, clear form fields
  //       this.email = '';
  //       this.password = '';
  //       this.errorMessage = '';
  //     })
  //     .catch(error => {
  //       // Handle sign up error
  //       this.errorMessage = error.message;
  //     });
  // }
  onSubmit() {
    this.formSubmited = true;
    if (!this.formGroup.invalid) {
      this.loadingService.show();
      this.authService.signIn(this.formGroup.value.email, this.formGroup.value.password)
        .then(() => {
          this.authService.setCurrentUser(this.formGroup.value.email);
          this.loadingService.hide();
          this.formSubmited = false;
          this.router.navigate(['/success']);

        })
        .catch(error => {
          // Handle sign in error
          this.errorMessage = "invalid credentials";
          this.loadingService.hide();

        });
    }

  }


  signOut(): void {
    this.authService.signOut();

  }
}

