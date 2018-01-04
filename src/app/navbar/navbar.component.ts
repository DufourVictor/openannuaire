import {Component, Input, OnInit} from '@angular/core';
import {RetrieveCompaniesService} from "../retrieve-companies.service";

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
    filter: {};
    @Input() parameter: string;
    pathToImg = 'assets/img/Open-Annuaire.jpg';
    totalCompanies: number;
    currentDate: string;

    constructor(private retrieveCompaniesService: RetrieveCompaniesService) {
        this.currentDate = new Date().toLocaleDateString();
    }

    onFilter(filter: string) {
        this.filter = filter;
        this.retrieveCompaniesService.filterCompanies.emit({
            name: this.parameter,
            filter: filter,
        });
    }

    ngOnInit() {
        this.retrieveCompaniesService.getTotalCompanies().subscribe(
            (response) => {
                this.totalCompanies = response.nhits;
            }
        )
    }
}
