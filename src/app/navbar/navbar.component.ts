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
    public pathToImg = 'assets/img/Open-Annuaire.jpg';

    constructor(private retrieveCompaniesService: RetrieveCompaniesService) {
    }

    onFilter(filter: string) {
        this.filter = filter;
        this.retrieveCompaniesService.filterCompanies.emit({
            name: this.parameter,
            filter: filter,
        });
    }
}
