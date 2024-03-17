import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { ReadytoonboardComponent } from "../readytoonboard/readytoonboard.component";
import { UsermanagementService } from '../../services/usermanagement.service';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Employee } from '../../models/Employee';
import { LoadingService } from '../../services/loading.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LoadingBarComponent } from "../loading-bar/loading-bar.component";
import { EmployedataService } from '../../services/employedata.service';
import { CandidatedataserviceService } from '../../services/candidatedataservice.service';
import { Utils } from '../../utils/utils';
import { SessionService } from '../../services/session.service';
import { AuthService } from '../../services/authservice.service';
@Component({
    selector: 'app-addemploye',
    standalone: true,
    templateUrl: './addemploye.component.html',
    styleUrl: './addemploye.component.css',
    imports: [ReadytoonboardComponent, ReactiveFormsModule, MatProgressSpinnerModule, LoadingBarComponent]
})
export class AddemployeComponent implements OnInit, OnChanges {
    @Input() employedetailslist!: Employee;
    @Input() isadd: boolean = true
    @Output() notifyEdit: EventEmitter<string> = new EventEmitter<string>();
    visastatuslist: string[] = ["Ready to Lottery", "In Lottery", "Selected in Lottery", "In Pettetion", "Pettetion Approved", "Ready to Visa", "Got Visa"]
    employfrom: FormGroup;
    employformsubmitted: boolean = false
    submittedresponse: string = this.isadd ? "Data Saved successfully" : "Data updated successfully";
    formsubmition: boolean = false;
    loggedinuser!: string
    constructor(private formBuilder: FormBuilder,
        private usermanagementserrvice: UsermanagementService,
        private loadingService: LoadingService,
        private employedataservice: EmployedataService,
        private candidatedataservice: CandidatedataserviceService,
        private authservice: AuthService) {


        console.log("this.employedetailslist");
        console.log(this.isadd);
        this.employfrom = this.formBuilder.group({
            documentno: ["", Validators.required],
            firstname: ["", Validators.required],
            lastname: ["", Validators.required],
            middlename: [""],
            dob: ["", Validators.required],
            gender: ["", Validators.required],
            email: ["", [Validators.required, Validators.email]],
            mobile: ["", Validators.required],
            visastatus: [this.visastatuslist[0], Validators.required]

        });


        console.log("this.employfrom.value");
        console.log(this.employfrom.value);
    }
    ngOnChanges(changes: SimpleChanges): void {
        this.employfrom = this.formBuilder.group({
            documentno: [this.employedetailslist?.documentno, Validators.required],
            firstname: [this.employedetailslist?.firstname, Validators.required],
            lastname: [this.employedetailslist?.lastname, Validators.required],
            middlename: [this.employedetailslist?.middlename],
            dob: [this.employedetailslist?.dob, Validators.required],
            gender: [this.employedetailslist?.gender, Validators.required],
            email: [this.employedetailslist?.email, [Validators.required, Validators.email]],
            mobile: [this.employedetailslist?.mobile, Validators.required],
            visastatus: [this.employedetailslist?.visastatus, Validators.required]
        });
    }
    ngOnInit(): void {
        this.authservice.getCurrentUser().subscribe(data => {
            if (data)
                this.loggedinuser = data;
        })
    }

    onSubmit() {
        this.employformsubmitted = true;
        if (!this.employfrom.invalid) {
            const formData = this.employfrom.value;

            const employe = new Employee(
                formData.documentno,
                formData.firstname,
                formData.middlename,
                formData.lastname,
                formData.dob,
                formData.gender,
                formData.email,
                formData.mobile,
                formData.visastatus



            );
            employe.datecreated = this.employedetailslist?.datecreated ? this.employedetailslist.datecreated : new Utils().formatDateToString(new Date());
            employe.createdby = this.employedetailslist?.createdby ? this.employedetailslist.createdby : this.loggedinuser;



            employe.dateupdated = new Utils().formatDateToString(new Date())
            employe.updatedby = this.loggedinuser;


            this.usermanagementserrvice.saveUserData(employe).subscribe(() => {
                this.loadingService.hide();
                if (this.isadd) {
                    this.employfrom.reset();

                } else {
                    this.notifyEdit.emit();
                }

                this.candidatedataservice.syncCandidateData(this.employedetailslist?.documentno);
                this.employformsubmitted = false;
                this.formsubmition = true;
                this.submittedresponse = this.isadd ? "Data Saved successfully" : "Data updated successfully";
                this.employedataservice.syncUserData();
                setTimeout(() => {
                    this.formsubmition = false;
                }, 3000);

            }, error => {
                console.error("Error saving data:", error);
            })

        }

    }


}
