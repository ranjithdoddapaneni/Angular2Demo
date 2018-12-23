import { Component } from '@angular/core';
@Component({
    selector: 'EmpList',
    templateUrl: 'app/EmployeeComponent/EmployeesList.Component.html',
        styleUrls: ['app/EmployeeComponent/Emp.Component.css']
})
export class EmployeeList {
    employees: Employees[] = [
        new Employees("100","ranjith",100),
        new Employees("100", "ranjith", 100),
        new Employees("100", "ranjith", 100),
    ];              
};
class Employees {
    empNumber: string;
    name: string;
    salary: number;
    constructor( empNum: string,name: string,salary: number)
    {
        this.empNumber = empNum;
        this.name = name;
        this.salary = salary;
    }
}