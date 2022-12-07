import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { ViewEmployeesComponent } from './view-employees/view-employees.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { EmployeeSearchComponent } from './employee-search/employee-search.component';
const myRoute:Routes=[
  {
    path:"",
    component:AddEmployeeComponent
  },
  {
    path:"view",
    component:ViewEmployeesComponent
  },
  {
    path:"search",
    component:EmployeeSearchComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    AddEmployeeComponent,
    ViewEmployeesComponent,
    NavBarComponent,
    EmployeeSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
