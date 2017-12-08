import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import {FirmApiInterface} from './firm-api-interface';

@Injectable()
export class RetrieveCompaniesService {
    constructor(private http: Http) {
    }

    getCompanies(): Observable<FirmApiInterface> {
        return this.http.get('https://firmapi.com/api/v1/companies').map(
            (res: Response) => res.json() as FirmApiInterface
        );
    }
}
