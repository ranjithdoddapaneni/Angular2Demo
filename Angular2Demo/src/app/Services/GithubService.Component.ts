import { Injectable } from '@angular/core';
import { Http, Response  } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class GitHubService {
    constructor(private _http: Http) {
    }
    getServiceData(strUrl: string) {
        return this._http.get(strUrl).map((res: Response)=>res.json());
    }
}
