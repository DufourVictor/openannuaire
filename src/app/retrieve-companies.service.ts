import {Injectable, EventEmitter} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';
import {ApiInterface} from './Model/api-interface';
import {CompanyInterface} from './Model/company-interface';
import {Company} from './Model/company';
import {QueryBuilderService} from './query-builder.service';
import {Filter} from './Model/filter';

@Injectable()
export class RetrieveCompaniesService {
    static DATASET = 'sirene';
    static LANG = 'fr';
    static ROWS = 100;

    private url = 'https://public.opendatasoft.com/api/records/1.0/search/';
    companies: Company[] = [];
    retrieveCompanies = new EventEmitter();
    filterCompanies = new EventEmitter();
    totalCompanies = new EventEmitter();
    filters: Filter[] = [];
    start = 0;

    constructor(private http: HttpClient, private query: QueryBuilderService) {
        this.filterCompanies.subscribe((filter: Filter) => {
            if (!this.filters.includes(filter)) {
                this.filters.push(filter);
            }
            this.reloadCompanies(true);
        });
    }

    getCompanies(refresh: boolean = true) {
        if (refresh) {
            this.companies = [];
        }
        return this.http.get(this.url, {
            params: {
                dataset: RetrieveCompaniesService.DATASET,
                lang: RetrieveCompaniesService.LANG,
                rows: RetrieveCompaniesService.ROWS.toString(),
                start: this.start.toString(),
                q: this.query.queryBuilder(this.filters),
            },
        }).map(
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
                        record.fields.dcret,
                        record.fields.coordonnees,
                    ));
                });
                this.retrieveCompanies.emit(this.companies as Company[]);
            }
        );
    }

    reloadCompanies(reload = false) {
        if (reload) {
            this.companies = [];
            this.start = 0;
        }
        return this.getCompanies();
    }

    loadNextCompanies() {
        this.start += RetrieveCompaniesService.ROWS;
        this.getCompanies(false);
    }
}
