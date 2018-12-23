"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var GithubService_Component_1 = require("./GithubService.Component");
var UserComponent = (function () {
    function UserComponent(_hubSercie) {
        this._hubSercie = _hubSercie;
        this.users = [];
        this.userUrl = 'https://api.github.com/users/hadley/orgs';
    }
    UserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._hubSercie.getServiceData(this.userUrl).subscribe(function (data) { return _this.users = data; });
    };
    return UserComponent;
}());
UserComponent = __decorate([
    core_1.Component({
        selector: 'Users',
        templateUrl: 'app/Services/GithubService.Com.html',
        providers: [GithubService_Component_1.GitHubService]
    }),
    __metadata("design:paramtypes", [GithubService_Component_1.GitHubService])
], UserComponent);
exports.UserComponent = UserComponent;
//# sourceMappingURL=Github.Component.js.map