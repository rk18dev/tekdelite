import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Employee } from '../models/Employee';
import { UsermanagementService } from './usermanagement.service';
import { LoadingService } from './loading.service';

@Injectable({
  providedIn: 'root'
})
export class EmployedataService {

  employeData = new Subject<Employee[]>();
  constructor(private userManagementService: UsermanagementService, private loadingService: LoadingService) {
    this.subscribeToUserData();
  }
  private subscribeToUserData() {
    this.loadingService.show();
    this.userManagementService.getUsersData().subscribe(
      data => {
        this.employeData.next(data);
        this.loadingService.hide();
       
      },
      error => {
        console.error("Error fetching data:", error);
        this.loadingService.hide();

      }
    );
  }

  
  syncUserData(){
    this.subscribeToUserData();
  }
  
}
