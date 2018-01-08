import {Injectable, EventEmitter} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';
import {ApiInterface} from './Model/api-interface';
import {CompanyInterface} from './Model/company-interface';
import {Company} from './Model/company';

@Injectable()
export class RetrieveCompaniesService {
    private url = 'https://public.opendatasoft.com/api/records/1.0/search/?dataset=sirene&lang=fr&rows=100';
    params = {};
    companies: Company[] = [];
    retrieveCompanies = new EventEmitter();
    filterCompanies = new EventEmitter();
    totalCompanies = new EventEmitter();

    constructor(private http: HttpClient) {
        this.filterCompanies.subscribe((params) => {
            this.params[params.name] = params.filter.toString();
            this.getCompanies(this.params);
        });
    }

    getCompanies(params = {}) {
        return this.http.get(this.url, {params: params}).map(
            (res) => res as ApiInterface).subscribe(
            (response) => {
                this.totalCompanies.emit(response.nhits);
                response.records.forEach((record: CompanyInterface) => {
                    this.companies.push(new Company(
                        record.fields.siren,
                        record.fields.l1_normalisee,
                        record.fields.l4_normalisee,
                        record.fields.codpos,
                        record.fields.libcom,
                        record.fields.categorie,
                        record.fields.libapen,
                        record.fields.libtefet,
                        record.fields.date_deb_etat_adm_et,
                        record.fields.coordonnees,
                    ));
                });

                this.retrieveCompanies.emit(this.companies as Company[]);
            }
        );
    }
}
