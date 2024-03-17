import { SessionService } from "../services/session.service";
import { Utils } from "../utils/utils";

export class Employee {
  constructor(
    public documentno: string,
    public firstname: string,
    public middlename: string,
    public lastname: string,
    public dob: Date,
    public gender: string,
    public email: string,
    public mobile: string,
    public visastatus: string,
    public createdby: string|null=null,
    public updatedby: string="",
    public lotteryyear: number = new Date().getFullYear(),
    public datecreated: string = new Utils().formatDateToString(new Date()),
    public dateupdated: string = new Utils().formatDateToString(new Date())
  ) { }
}


