import { Injectable } from '@angular/core';
import { FirebaseApp, initializeApp } from "firebase/app";
import { Database, get, getDatabase, ref, set } from "firebase/database";
import { Auth } from "firebase/auth";

import UserDetails from '../models/UserDetails';
import { Employee } from '../models/Employee';
import { Observable, catchError, from } from 'rxjs';
import { LoadingService } from './loading.service';




@Injectable({
  providedIn: 'root'
})
export class UsermanagementService {

  yearofdata:string="users-2024"
  constructor(private loadingService: LoadingService) {

  }

  saveUserData(userDetails: Employee): Observable<void> {
    this.loadingService.show();
    const db = getDatabase();
    const userRef = ref(db, this.yearofdata+'/' + userDetails.documentno);
    this.loadingService.hide();

    return from(set(userRef, userDetails))
      .pipe(
        catchError(error => {
          console.error("Error saving data:", error);
          throw error;
        })
      );
  }
  getUsersData(): Observable<Employee[]> {
    this.loadingService.show();
    const db = getDatabase();
    const usersRef = ref(db, this.yearofdata+'/');

    return new Observable<Employee[]>(observer => {
      get(usersRef).then(snapshot => {
        if (snapshot.exists()) {
          // Data exists, process it
          const userData = snapshot.val();
          const employees: Employee[] = Object.keys(userData).map(key => userData[key]);
          observer.next(employees);
        } else {
          // No data exists at the specified location
          console.log("No data available");
          observer.next([]);
        }
      }).catch(error => {
        // Error handling
        console.error("Error fetching data:", error);
        observer.error("Error fetching data");
      }).finally(() => {
        this.loadingService.hide();
      });
    });
  }
  getUserData(documentno: string): Observable<Employee> {
    this.loadingService.show();
    const db = getDatabase();
    const usersRef = ref(db, this.yearofdata+'/' + documentno);

    return new Observable<Employee>(observer => {
      get(usersRef).then(snapshot => {
        if (snapshot.exists()) {
          // Data exists, process it
          const userData = snapshot.val();
          const employe: Employee = userData as Employee;
          observer.next(employe);
        } else {
          // No data exists at the specified location
          console.log("No data available");
          observer.next();
        }
      }).catch(error => {
        // Error handling
        console.error("Error fetching data:", error);
        observer.error("Error fetching data");
      }).finally(() => {
        this.loadingService.hide();
      });
    });
  }
}
