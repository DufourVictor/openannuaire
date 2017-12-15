import {Component, OnInit} from '@angular/core';
import {RetrieveCompaniesService} from './retrieve-companies.service';
import {CompanyInterface} from './company-interface';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [RetrieveCompaniesService],
})
export class AppComponent implements OnInit {
    companies: CompanyInterface[];
    params = [];

    constructor(private retrieveCompaniesService: RetrieveCompaniesService) {
    }

    getCompanies(): void {
        this.retrieveCompaniesService.getCompanies(this.params).subscribe(data => {
            this.companies = data.companies as CompanyInterface[];
        });
    }

    ngOnInit() {
        this.getCompanies();
    }

    onFilter(event) {
        this.params[event.name] = event.filter;
        this.getCompanies();
    }
}
