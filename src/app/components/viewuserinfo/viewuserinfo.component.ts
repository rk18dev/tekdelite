import { Component, OnInit } from '@angular/core';
import { UsermanagementService } from '../../services/usermanagement.service';
import { ActivatedRoute } from '@angular/router';
import { Employee } from '../../models/Employee';
import { LoadingBarComponent } from '../loading-bar/loading-bar.component';
import { AddemployeComponent } from "../addemploye/addemploye.component";
import { EmployedataService } from '../../services/employedata.service';
import { CandidatedataserviceService } from '../../services/candidatedataservice.service';

@Component({
  selector: 'app-viewuserinfo',
  standalone: true,
  templateUrl: './viewuserinfo.component.html',
  styleUrl: './viewuserinfo.component.css',
  imports: [AddemployeComponent]
})
export class ViewuserinfoComponent implements OnInit {

  documentno: string = "";
  employedetails!: Employee;
  isEdit: boolean = false
  isadd: boolean = false
  constructor(private route: ActivatedRoute,
    private usermanagemntservice: UsermanagementService, private candidatedataservice: CandidatedataserviceService) {

  }
  ngOnInit(): void {
    this.documentno = this.route.snapshot.params['userId'];
    this.candidatedataservice.syncCandidateData(this.documentno);
    this.candidatedataservice.candidatedetails.subscribe(data => {
      this.employedetails = data
    }, error => {
      console.log(error);
    })

  }

  editEmployee() {
    this.isEdit = !this.isEdit
  }
  onEditNotify() {
    this.isEdit = !this.isEdit
  }


}
