import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EmployeeComponent } from './EmployeeComponent/Employee.Component';
import { EmployeeList } from './EmployeeComponent/EmployeesList.Component';
import { LifeCycle } from './LifeCycle/LifeCycle'
 
@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [AppComponent, EmployeeComponent, EmployeeList, LifeCycle],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
