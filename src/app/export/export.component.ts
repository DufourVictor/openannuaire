import {Component, Input} from '@angular/core';

import {Angular2Csv} from 'angular2-csv';
import {RetrieveCompaniesService} from "../retrieve-companies.service";

@Component({
    selector: 'app-export',
    templateUrl: './export.component.html',
    styleUrls: ['./export.component.scss']
})
export class ExportComponent implements OnInit {
    companies: CompanyInterface[];
    params = {};

    constructor(private retrieveCompaniesService: RetrieveCompaniesService) {
    }

    ngOnInit() {
        this.retrieveCompaniesService.getCompanies(this.params).subscribe(data => {
            this.companies = data.companies as CompanyInterface[];
        });
    }

    exportCompanies() {
        const arrayCompanies = [];
        const head = ['Siren', 'Nom', 'Capitale', 'Forme juridique', 'Adresse', 'Code postal', 'Ville', 'Radié', 'Activité'];
        const options = {
            fieldSeparator: ';',
            headers: head,
        };

        this.companies.forEach(company => {
            arrayCompanies.push(new Company(
                company.siren,
                company.names.best,
                company.capital,
                company.legal_form,
                company.address,
                company.postal_code,
                company.city,
                company.radie,
                company.activity,
            ));
        })

        new Angular2Csv(arrayCompanies, 'Export des entreprises - Openannuaire', options);
    }
}
