import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import {FirmApiInterface} from './firm-api-interface';

@Injectable()
export class RetrieveCompaniesService {
    constructor(private http: HttpClient) {
    }
    getCompanies(param): Observable<FirmApiInterface> {
        let URL = 'https://firmapi.com/api/v1/companies';
        if (param === null) {
            return this.http.get('https://firmapi.com/api/v1/companies').map(
                (res) => res as FirmApiInterface
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
                (res) => res as FirmApiInterface
            );
        }
    }
}
