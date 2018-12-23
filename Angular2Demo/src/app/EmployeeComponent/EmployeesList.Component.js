"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var EmployeeList = (function () {
    function EmployeeList() {
        this.employees = [
            new Employees("100", "ranjith", 100),
            new Employees("100", "ranjith", 100),
            new Employees("100", "ranjith", 100),
        ];
    }
    return EmployeeList;
}());
EmployeeList = __decorate([
    core_1.Component({
        selector: 'EmpList',
        templateUrl: 'app/EmployeeComponent/EmployeesList.Component.html',
        styleUrls: ['app/EmployeeComponent/Emp.Component.css']
    })
], EmployeeList);
exports.EmployeeList = EmployeeList;
;
var Employees = (function () {
    function Employees(empNum, name, salary) {
        this.empNumber = empNum;
        this.name = name;
        this.salary = salary;
    }
    return Employees;
}());
//# sourceMappingURL=EmployeesList.Component.js.map