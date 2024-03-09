import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { OnboardusersComponent } from "../onboardusers/onboardusers.component";

@Component({
    selector: 'app-addonboarduser',
    standalone: true,
    templateUrl: './addonboarduser.component.html',
    styleUrl: './addonboarduser.component.css',
    imports: [OnboardusersComponent]
})
export class AddonboarduserComponent {
 
  constructor(private formBuilder: FormBuilder) {

   }

  ngOnInit(): void {
    let userForm = this.formBuilder.group({
      id: ['', Validators.required],
      fullName: ['', Validators.required],
      joiningDate: ['', Validators.required],
      ratePerHour: ['', Validators.required],
      companyFeePerHour: ['', Validators.required]
    });
  }
  onSubmit(){

  }
  
}
