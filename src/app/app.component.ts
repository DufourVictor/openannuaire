import {Component} from '@angular/core';
import {RetrieveCompaniesService} from './retrieve-companies.service';
import {ExportService} from './export.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [RetrieveCompaniesService, ExportService],
})
export class AppComponent {
    toggle = true;


    toggleSidebar() {
        this.toggle = !this.toggle;
    }
}
