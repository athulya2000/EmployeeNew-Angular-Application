import { ThisReceiver } from '@angular/compiler';
import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-employee-search',
  templateUrl: './employee-search.component.html',
  styleUrls: ['./employee-search.component.css']
})
export class EmployeeSearchComponent {

  employeecode=""

  SearchData:any=[]

  constructor(private api:ApiService){}

  readValues=()=>{
    let data:any={
      "employeecode":this.employeecode
      }
      console.log(data)
      this.api.searchEmployee(data).subscribe(
        (response:any)=>{
          console.log(response)
          if (response.length==0) {
            alert("Invalid employee code")
          } else {
            this.SearchData=response
          }
        }
      )
  }
}
