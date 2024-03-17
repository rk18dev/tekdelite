export class OnboardingFormData {
    constructor(
       public documentno: string,
       public fullName: string,
       public dob: Date,
       public gender: string,
       public email: string,
       public mobile: string,
       public clientname: string,
       public joiningDate: Date,
       public ratePerHour: number,
       public companyFeePerHour: number
    ) { }
}