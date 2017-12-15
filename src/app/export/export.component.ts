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
        for (let i = 0; i < this.companies.length; i++) {
            arrayCompanies.push(new Company(
                this.companies[i].activity,
                this.companies[i].address,
                this.companies[i].capital,
                this.companies[i].city,
                this.companies[i].legal_form,
                this.companies[i].names.best,
                this.companies[i].postal_code,
                this.companies[i].radie,
                this.companies[i].siren,
            ));
        }

        new Angular2Csv(arrayCompanies, 'test');
        // SUr chaque entreprise on instancie une nouvelle Company qu'on push dans un array
        // On exporte l'array
    }
}
