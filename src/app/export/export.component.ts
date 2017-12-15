import {Component, Input} from '@angular/core';
import {CompanyInterface} from '../company-interface';
import {Company} from '../Company';
import {Angular2Csv} from 'angular2-csv';

@Component({
    selector: 'app-export',
    templateUrl: './export.component.html',
    styleUrls: ['./export.component.scss']
})
export class ExportComponent {
    companies: CompanyInterface[];

    constructor() {
    }

    @Input('companies')
    set companiesParent(companies: CompanyInterface[]) {
        this.companies = companies;
    }

    exportCompanies() {
        const arrayCompanies = [];
        const head = ['Siren', 'Nom', 'Capitale', 'Forme juridique', 'Adresse', 'Code postal', 'Ville', 'Radié', 'Activité'];
        const options = {
            fieldSeparator: ';',
            headers: head
        };

        for (const company of this.companies) {
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
        }

        new Angular2Csv(arrayCompanies, 'Export des entreprises - Openannuaire', options);
    }
}
