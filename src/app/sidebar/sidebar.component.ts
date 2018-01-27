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
    facetGroups = [];
    facetCount = [];

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
        this.retrieveCompaniesService.facetGroupsCompanies.subscribe(
            (facets = []) => {
                this.facetGroups = facets;
                this.countFacets();
            }
        );
    }

    // Display filter
    toggleFilter(filter, visible, input): void {
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

        if (true === visible && 0 !== input.filter.values.length) {
            this.clearFilter(input, true);
        }
    }

    // Reset all filters
    resetFilters(inputs): void {
        this.hideApe = true;
        this.hideCategories = true;
        this.hideCounty = true;
        this.hideCity = true;
        this.hideCreation = true;
        this.hideLegal = true;
        this.hideEffectives = true;
        this.hideRevenues = true;
        this.hidePostal = true;

        inputs.forEach((input, key) => {
            this.clearFilter(input, key + 1 === inputs.length);
        });
    }

    // Clear value of one filter
    clearFilter(input, refresh = false): void {
        input.filter.values = [];

        if (refresh) {
            this.retrieveCompaniesService.getCompanies();
        }
    }

    // Count facet by filters
    countFacets(): void {
        if (0 !== this.facetGroups.length) {
            this.facetGroups.forEach(facetGroup => {
                this.facetCount[facetGroup.name] = [];
                facetGroup.facets.forEach(facet => {
                    if (undefined === this.facetCount[facetGroup.name][facet.name]) {
                        this.facetCount[facetGroup.name][facet.name] = facet.count;
                    }
                });
            });
        }
    }

    // Retrieve count facet by filter and value
    retrieveCountFacetByFilterAndValue(filter, value) {
        if (this.facetCount[filter]) {
            return this.facetCount[filter][value];
        }
    }
}
