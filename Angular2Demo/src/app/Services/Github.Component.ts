import { Component, Injectable } from '@angular/core';
import { CommonModule } from '@angular/common'
import { GitHubService } from './GithubService.Component'
@Component({
    selector: 'Users',
    templateUrl: 'app/Services/GithubService.Com.html',
    providers: [GitHubService]   
})
export class UserComponent {
    users: any = [];
    userUrl: string = 'https://api.github.com/users/hadley/orgs';
    constructor(private _hubSercie: GitHubService) {
    }
    ngOnInit()
    {
        this._hubSercie.getServiceData(this.userUrl).subscribe(data => this.users = data);
    }

}
