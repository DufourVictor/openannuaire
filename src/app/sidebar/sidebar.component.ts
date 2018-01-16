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
    hideCategories = true;
    hideCounty = true;
    hideCity = true;
    hideCreation = true;
    hideLegal = true;
    hideEffectives = true;
    hideRevenues = true;
    hidePostal = true;

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
            case Filters.CATEGORIES:
                this.hideCategories = visible;
                break;
            case Filters.COUNTY:
                this.hideCounty = visible;
                break;
            case Filters.CITY:
                this.hideCity = visible;
                break;
            case Filters.CREATION:
                this.hideCreation = visible;
                break;
            case Filters.LEGAL:
                this.hideLegal = visible;
                break;
            case Filters.EFFECTIVES:
                this.hideEffectives = visible;
                break;
            case Filters.REVENUES:
                this.hideRevenues = visible;
                break;
            case Filters.POSTAL:
                this.hidePostal = visible;
                break;
        }
    }
}
