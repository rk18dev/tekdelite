import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { initializeApp } from 'firebase/app';
import { getAuth, Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, UserCredential, User } from 'firebase/auth';
import { BehaviorSubject, Observable, Subject, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private auth: Auth;
  private currentUserSubject: BehaviorSubject<User | null>;
  logedinuser!:  Subject<string>
  constructor(private router: Router) {
    // Initialize Firebase app
    const firebaseConfig = {
      apiKey: "AIzaSyDcxdQJ3_xeAUlDyVAtiAPB5yTfwr34yzg",
      authDomain: "tekdelite-de9a6.firebaseapp.com",
      databaseURL: "https://tekdelite-de9a6-default-rtdb.firebaseio.com",
      projectId: "tekdelite-de9a6",
      storageBucket: "tekdelite-de9a6.appspot.com",
      messagingSenderId: "913551698210",
      appId: "1:913551698210:web:2b3e9db2edde0822a65d7b"
    };
    const firebaseApp = initializeApp(firebaseConfig);

    // Initialize Firebase auth
    this.auth = getAuth(firebaseApp);
    this.currentUserSubject = new BehaviorSubject<User | null>(null);

    // Subscribe to authState changes
    this.auth.onAuthStateChanged(user => {


      this.currentUserSubject.next(user);

    }, err => {

    });
  }

  // Sign up method
  signUp(email: string, password: string): Promise<any> {
    return createUserWithEmailAndPassword(this.auth, email, password);
  }

  // Sign in method
  signIn(email: string, password: string): Promise<UserCredential> {
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  // Sign out method
  signOut() {
    signOut(this.auth)
    localStorage.setItem("loginuser", "");
    this.router.navigate(['/admin-logout']);
    
  }

  getCurrentUser(): Observable<string | null> {
    const email = localStorage.getItem("loginuser");
    return of(email); // Wrap the email in an Observable
  }
  setCurrentUser(email: string) {
    localStorage.setItem("loginuser", email);
  }

}
