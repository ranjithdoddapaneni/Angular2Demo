"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var app_component_1 = require("./app.component");
var Employee_Component_1 = require("./EmployeeComponent/Employee.Component");
var EmployeesList_Component_1 = require("./EmployeeComponent/EmployeesList.Component");
var LifeCycle_1 = require("./LifeCycle/LifeCycle");
var Github_Component_1 = require("./Services/Github.Component");
var GithubService_Component_1 = require("./Services/GithubService.Component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, http_1.HttpModule],
        declarations: [app_component_1.AppComponent, Employee_Component_1.EmployeeComponent, EmployeesList_Component_1.EmployeeList, LifeCycle_1.LifeCycle, GithubService_Component_1.GitHubService, Github_Component_1.UserComponent],
        bootstrap: [app_component_1.AppComponent],
        providers: [GithubService_Component_1.GitHubService]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map