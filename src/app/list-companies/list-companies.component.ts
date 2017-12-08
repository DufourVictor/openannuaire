import {Component, OnInit} from '@angular/core';
import {RetrieveCompaniesService} from '../retrieve-companies.service';
import {CompanyInterface} from '../company-interface';

@Component({
    selector: 'app-list-companies',
    templateUrl: './list-companies.component.html',
    styleUrls: ['./list-companies.component.scss'],
    providers: [RetrieveCompaniesService]
})
export class ListCompaniesComponent implements OnInit {
    companies: CompanyInterface[];

    constructor(private retrieveCompaniesService: RetrieveCompaniesService) {
    }

    ngOnInit(): void {
        this.retrieveCompaniesService.getCompanies().subscribe(data => {
            this.companies = data.companies as CompanyInterface[];
        });
    }
}
