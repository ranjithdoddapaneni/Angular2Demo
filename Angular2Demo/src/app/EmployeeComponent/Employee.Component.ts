import { Component } from '@angular/core';
@Component({
    selector: 'Emp-component',
    templateUrl: 'app/EmployeeComponent/Employee.Component.html',    
    styleUrls:['app/EmployeeComponent/Emp.Component.css']
})
export class EmployeeComponent{
    firstName: string = 'Ranjith Kumar';
    lastName: string = 'Doddapaneni';
    designation: string = 'software Developer'; 
}