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
    load = false;

    constructor(private retrieveCompaniesService: RetrieveCompaniesService) {
        this.retrieveCompaniesService.totalCompanies.subscribe(
            (total: number) => {
                if (false === this.load) {
                    this.currentDate = new Date().toLocaleDateString();
                    this.totalCompanies = total;
                    this.load = true;
                }
            }
        );
    }
}
