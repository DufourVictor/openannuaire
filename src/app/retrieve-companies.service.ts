import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import {FirmApiInterface} from './firm-api-interface';

@Injectable()
export class RetrieveCompaniesService {
    constructor(private http: Http) {
    }
    getCompanies(param): Observable<FirmApiInterface> {
        let URL = 'https://firmapi.com/api/v1/companies';
        if (param === null) {
            return this.http.get(URL).map(
                (res: Response) => res.json() as FirmApiInterface
            );
        } else {
            for (let i = 0; i < param.length; i++) {
                if (i === 0) {
                    URL = URL + '?' + param[i]['name'] + '=' + param[i]['value'];
                } else {
                    URL = URL + '&' + param[i]['name'] + '=' + param[i]['value'];
                }
            }
            return this.http.get(URL).map(
                (res: Response) => res.json() as FirmApiInterface
            );
        }
    }
}
