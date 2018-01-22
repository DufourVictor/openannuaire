import {Component, Input, OnInit} from '@angular/core';
import {Filter} from '../Model/filter';
import {ENTER, COMMA} from '@angular/cdk/keycodes';
import {RetrieveCompaniesService} from '../retrieve-companies.service';
import {DefaultFilters} from '../Model/default-filters';

@Component({
    selector: 'app-filters',
    templateUrl: './filters.component.html',
    styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {
    selectable = true;
    removable = true;
    separatorKeys = [ENTER, COMMA];
    filter: Filter;
    facets: string[] = [];
    options;
    timeout;

    @Input() paramName: string;
    @Input() paramLabel: string;
    @Input() needName = true;
    @Input() type = 'text';
    @Input() operator = ':';
    @Input() multiple = true;
    @Input() optionIndex: string;

    constructor(private retrieveCompaniesService: RetrieveCompaniesService) {
    }

    ngOnInit(): void {
        this.filter = new Filter(this.paramName, this.operator, this.multiple, this.needName);
        this.options = DefaultFilters[this.optionIndex];
    }

    // Emit events
    onFilter(): void {
        this.retrieveCompaniesService.filterCompanies.emit(this.filter);
        this.retrieveCompaniesService.facetCompanies.emit(this.facets);
    }

    // Add filter + facet for query
    addFilter(value): void {
        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
            if ((undefined !== value.trim() && 0 !== value.trim().length) ||
                ('name' === this.paramName && 0 === value.trim().length)) {
                this.filter.addValue(value.trim());
                this.facets.push(this.paramName);
                this.onFilter();
            }
        }, 500);
    }

    // Remove filter + facet for query
    removeFilter(value): void {
        this.filter.removeValue(value);
        this.facets.splice(this.facets.indexOf(this.paramName), 1);
        this.onFilter();
    }
}
