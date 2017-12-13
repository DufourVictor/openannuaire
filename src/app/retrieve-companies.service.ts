import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import {FirmApiInterface} from './firm-api-interface';

@Injectable()
export class RetrieveCompaniesService {
    constructor(private http: HttpClient) {
    }

    getCompanies(params = {}): Observable<FirmApiInterface> {
        return this.http.get('https://firmapi.com/api/v1/companies', { params: params }).map(
            (res) => res as FirmApiInterface
        );
    }
}
