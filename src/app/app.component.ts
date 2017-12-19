import {Component, OnInit} from '@angular/core';
import {RetrieveCompaniesService} from './retrieve-companies.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [RetrieveCompaniesService],
})
export class AppComponent implements OnInit {
    toggle = true;

    constructor(private retrieveCompaniesService: RetrieveCompaniesService) {
    }

    ngOnInit() {
        this.retrieveCompaniesService.getCompanies();
    }

    toggleSidebar() {
        this.toggle = !this.toggle;
    }
}
