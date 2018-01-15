import {Component} from '@angular/core';
import {RetrieveCompaniesService} from '../retrieve-companies.service';
import {Filters} from "../Enums/filters.enum";

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
    totalCompanies: number;

    // State of filters
    hideApe = true;

    constructor(private retrieveCompaniesService: RetrieveCompaniesService) {
        this.retrieveCompaniesService.totalCompanies.subscribe(
            (total: number) => {
                this.totalCompanies = total;
            }
        );
    }

    toggleFilter(filter, visible) {
        switch (filter) {
            case Filters.APE:
                this.hideApe = visible;
                break;
        }
    }
}
