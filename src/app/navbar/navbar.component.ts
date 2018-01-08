import {Component, Input} from '@angular/core';
import {RetrieveCompaniesService} from "../retrieve-companies.service";

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
    filter: {};
    @Input() parameter: string;
    pathToImg = 'assets/img/Open-Annuaire.jpg';
    totalCompanies: number;
    currentDate: string;

    constructor(private retrieveCompaniesService: RetrieveCompaniesService) {
        this.currentDate = new Date().toLocaleDateString();
        this.retrieveCompaniesService.totalCompanies.subscribe(
            (total: number) => this.totalCompanies = total
        );
    }

    onFilter(filter: string) {
        this.filter = filter;
        this.retrieveCompaniesService.filterCompanies.emit({
            name: this.parameter,
            filter: filter,
        });
    }
}
