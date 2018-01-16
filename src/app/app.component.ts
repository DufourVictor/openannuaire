import {Component, HostListener} from '@angular/core';
import {RetrieveCompaniesService} from './retrieve-companies.service';
import {ExportService} from './export.service';
import {QueryBuilderService} from './query-builder.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    providers: [RetrieveCompaniesService, ExportService, QueryBuilderService],
})
export class AppComponent {
    toggle = true;

    @HostListener('window:resize', ['$event'])
    onResize(event) {
        // medium devices
        if (event.target.innerWidth <= 991 && this.toggle === true) {
            this.toggle = false;
        } else if (event.target.innerWidth > 991 && this.toggle === false) {
            this.toggle = true;
        }
    }

    toggleSidebar() {
        this.toggle = !this.toggle;
    }
}
