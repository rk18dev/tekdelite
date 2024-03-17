import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Employee } from '../models/Employee';
import { LoadingService } from './loading.service';
import { UsermanagementService } from './usermanagement.service';

@Injectable({
  providedIn: 'root'
})
export class CandidatedataserviceService {
  candidatedetails = new Subject<Employee>();

  constructor(private userManagementService: UsermanagementService, private loadingService: LoadingService) {

    this.subscribetoCandidateDetails("");
  }

  private subscribetoCandidateDetails(documentno: string) {
    this.loadingService.show();
    this.userManagementService.getUserData(documentno).subscribe(
      data => {
        this.candidatedetails.next(data);
        this.loadingService.hide();

      },
      error => {
        console.error("Error fetching data:", error);
        this.loadingService.hide();

      }
    );
  }

  syncCandidateData(documentno: string) {
    this.subscribetoCandidateDetails(documentno);
  }

}
