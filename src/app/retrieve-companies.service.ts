import {Injectable, EventEmitter} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';
import {FirmApiInterface} from './firm-api-interface';

@Injectable()
export class RetrieveCompaniesService {
    params = {};
    retrieveCompanies = new EventEmitter();
    filterCompanies = new EventEmitter();

    constructor(private http: HttpClient) {
        this.filterCompanies.subscribe((params) => {
            this.params[params.name] = params.filter.toString();
            this.getCompanies(this.params);
        });
    }

    getCompanies(params = {}) {
        return this.http.get('https://firmapi.com/api/v1/companies', { params: params }).map(
            (res) => res as FirmApiInterface).subscribe(
                (response) => this.retrieveCompanies.emit(response.companies)
        );
    }
}
