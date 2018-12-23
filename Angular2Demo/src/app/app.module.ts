import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './EmployeeComponent/Employee.Component';
import { EmployeeList } from './EmployeeComponent/EmployeesList.Component';
import { LifeCycle } from './LifeCycle/LifeCycle';
import { UserComponent } from './Services/Github.Component';
import { GitHubService } from './Services/GithubService.Component';

@NgModule({
    imports: [BrowserModule, FormsModule, HttpModule],
    declarations: [AppComponent, EmployeeComponent, EmployeeList, LifeCycle,  GitHubService, UserComponent],
    bootstrap: [AppComponent],
    providers: [GitHubService]
})
export class AppModule { }
