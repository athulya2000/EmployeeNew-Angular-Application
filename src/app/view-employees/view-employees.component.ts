import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-employees',
  templateUrl: './view-employees.component.html',
  styleUrls: ['./view-employees.component.css']
})
export class ViewEmployeesComponent {

constructor(private api:ApiService){
  api.fetchEmployee().subscribe(
    (response)=>{
      this.employee=response
    }
  )
}

  employee:any=[]
}
