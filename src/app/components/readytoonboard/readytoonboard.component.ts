import { Component, OnInit } from '@angular/core';
import UserDetails from '../../models/UserDetails';
import { RouterModule } from '@angular/router';
import { LoadingService } from '../../services/loading.service';
import { UsermanagementService } from '../../services/usermanagement.service';
import { Employee } from '../../models/Employee';
import { EmployedataService } from '../../services/employedata.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-readytoonboard',
  standalone: true,
  imports: [RouterModule, FormsModule],
  templateUrl: './readytoonboard.component.html',
  styleUrl: './readytoonboard.component.css'
})
export class ReadytoonboardComponent implements OnInit {


  employees: Employee[] = [];
  filteredEmployees: Employee[] = [];
  filterValue: string = '';
  selectedFilter: string = '';
  visastatuslist: string[] = ["Ready to Lottery", "In Lottery", "Selected in Lottery", "In Pettetion", "Pettetion Approved", "Ready to Visa", "Got Visa"]
  constructor(private employedataservice: EmployedataService, private loadingService: LoadingService) {
    this.employedataservice.syncUserData();
  }

  ngOnInit(): void {
    this.employedataservice.employeData.subscribe(data => {
      this.employees = data;
      this.filteredEmployees = this.employees;
    }, error => {
      console.error(error);
    });
  }

  applyFilter() {
    this.filteredEmployees = this.employees.filter(employee => {
      // Assuming you want to filter by document number
      return employee.documentno.toLowerCase().includes(this.filterValue.toLowerCase());
    });
  }
  applychangeFilter() {
    if (this.selectedFilter === 'All' || !this.selectedFilter) {
      this.filteredEmployees = this.employees;
    } else {
      this.filteredEmployees = this.employees.filter(employee => employee.visastatus === this.selectedFilter);
    }
  }
}
