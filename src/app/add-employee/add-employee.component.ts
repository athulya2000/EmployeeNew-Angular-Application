import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {

  employeecode=""
  employeename=""
  designation=""
  salary=""
  companyname=""
  mobileno=""
  username=""
  password=""

  constructor(private api:ApiService){}

  readValues=()=>{
    let employees:any={"employeecode":this.employeecode,"employeename":this.employeename,"designation":this.designation,"salary":this.salary,"companyname":this.companyname,"mobileno":this.mobileno,"username":this.username,"password":this.password}
    console.log(employees)
    this.api.addEmployee(employees).subscribe(
      (response:any)=>{
        console.log(response)
      }
    )
  }
}
