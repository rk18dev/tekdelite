import { Component } from '@angular/core';
import UserDetails from '../../models/UserDetails';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-onboardusers',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './onboardusers.component.html',
  styleUrl: './onboardusers.component.css'
})
export class OnboardusersComponent {
  userDetailsArray = [
    { id: 1, fullName: 'John Doe', joiningDate: '2022-01-01', ratePerHour: 25, companyFeePerHour: 5 },
    { id: 2, fullName: 'Alice Smith', joiningDate: '2022-02-01', ratePerHour: 30, companyFeePerHour: 6 }, { id: 1, fullName: 'John Doe', joiningDate: '2022-01-01', ratePerHour: 25, companyFeePerHour: 5 },
    { id: 2, fullName: 'Alice Smith', joiningDate: '2022-02-01', ratePerHour: 30, companyFeePerHour: 6 }, { id: 1, fullName: 'John Doe', joiningDate: '2022-01-01', ratePerHour: 25, companyFeePerHour: 5 },
    { id: 2, fullName: 'Alice Smith', joiningDate: '2022-02-01', ratePerHour: 30, companyFeePerHour: 6 }, { id: 1, fullName: 'John Doe', joiningDate: '2022-01-01', ratePerHour: 25, companyFeePerHour: 5 },
    { id: 2, fullName: 'Alice Smith', joiningDate: '2022-02-01', ratePerHour: 30, companyFeePerHour: 6 },
    { id: 2, fullName: 'Alice Smith', joiningDate: '2022-02-01', ratePerHour: 30, companyFeePerHour: 6 },
    { id: 2, fullName: 'Alice Smith', joiningDate: '2022-02-01', ratePerHour: 30, companyFeePerHour: 6 },
    { id: 2, fullName: 'Alice Smith', joiningDate: '2022-02-01', ratePerHour: 30, companyFeePerHour: 6 },
    { id: 2, fullName: 'Alice Smith', joiningDate: '2022-02-01', ratePerHour: 30, companyFeePerHour: 6 },
    { id: 2, fullName: 'Alice Smith', joiningDate: '2022-02-01', ratePerHour: 30, companyFeePerHour: 6 },
    { id: 2, fullName: 'Alice Smith', joiningDate: '2022-02-01', ratePerHour: 30, companyFeePerHour: 6 },
    { id: 2, fullName: 'Alice Smith', joiningDate: '2022-02-01', ratePerHour: 30, companyFeePerHour: 6 },
    { id: 2, fullName: 'Alice Smith', joiningDate: '2022-02-01', ratePerHour: 30, companyFeePerHour: 6 },
    { id: 2, fullName: 'Alice Smith', joiningDate: '2022-02-01', ratePerHour: 30, companyFeePerHour: 6 },
    { id: 2, fullName: 'Alice Smith', joiningDate: '2022-02-01', ratePerHour: 30, companyFeePerHour: 6 },
    { id: 2, fullName: 'Alice Smith', joiningDate: '2022-02-01', ratePerHour: 30, companyFeePerHour: 6 },
    // Add more user details as needed
  ];

}
