import {Component} from '@angular/core';
import {RetrieveCompaniesService} from '../retrieve-companies.service';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
    totalCompanies: number;

    constructor(private retrieveCompaniesService: RetrieveCompaniesService) {
        this.retrieveCompaniesService.totalCompanies.subscribe(
            (total: number) => {
                this.totalCompanies = total;
            }
        );
    }
}
