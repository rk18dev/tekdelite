import { Component } from '@angular/core';
import UserDetails from '../../models/UserDetails';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-readytoonboard',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './readytoonboard.component.html',
  styleUrl: './readytoonboard.component.css'
})
export class ReadytoonboardComponent {
  userDetailsArray = [
    { id: 1, fullName: 'John Doe', joiningDate: '2022-01-15' },
    { id: 2, fullName: 'Alice Smith', joiningDate: '2022-02-10' },
    { id: 3, fullName: 'Bob Johnson', joiningDate: '2022-03-20' }, { id: 1, fullName: 'John Doe', joiningDate: '2022-01-15' },
    { id: 2, fullName: 'Alice Smith', joiningDate: '2022-02-10' },
    { id: 3, fullName: 'Bob Johnson', joiningDate: '2022-03-20' }, { id: 1, fullName: 'John Doe', joiningDate: '2022-01-15' },
    { id: 2, fullName: 'Alice Smith', joiningDate: '2022-02-10' },
    { id: 3, fullName: 'Bob Johnson', joiningDate: '2022-03-20' }, { id: 1, fullName: 'John Doe', joiningDate: '2022-01-15' },
    { id: 2, fullName: 'Alice Smith', joiningDate: '2022-02-10' },
    { id: 3, fullName: 'Bob Johnson', joiningDate: '2022-03-20' }, { id: 1, fullName: 'John Doe', joiningDate: '2022-01-15' },
    { id: 2, fullName: 'Alice Smith', joiningDate: '2022-02-10' },
    { id: 3, fullName: 'Bob Johnson', joiningDate: '2022-03-20' }, { id: 1, fullName: 'John Doe', joiningDate: '2022-01-15' },
    { id: 2, fullName: 'Alice Smith', joiningDate: '2022-02-10' },
    { id: 3, fullName: 'Bob Johnson', joiningDate: '2022-03-20' },
    // Add more user details as needed
  ];
}
