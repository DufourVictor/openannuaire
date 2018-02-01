import {Component, OnInit} from '@angular/core';
import {Company} from '../Model/company';
import {RetrieveCompaniesService} from '../retrieve-companies.service';
import {ExportService} from '../export.service';
import {Extensions} from '../Enums/extensions.enum';

@Component({
    selector: 'app-export',
    templateUrl: './export.component.html',
    styleUrls: ['./export.component.scss']
})
export class ExportComponent implements OnInit {
    static MAX_ROWS = 100;

    private urlExport = 'https://data.opendatasoft.com/explore/dataset/sirene@public/download/?timezone=Europe/Berlin&use_labels_for_header=true&format=';
    companies: Company[];
    totalCompanies: number;
    extension: string;
    loaded: boolean;

    constructor(private retrieveCompaniesService: RetrieveCompaniesService, private exportService: ExportService) {
        this.retrieveCompaniesService.totalCompanies.subscribe(
            (total: number) => this.totalCompanies = total
        );
    }

    ngOnInit() {
        this.retrieveCompaniesService.getCompanies();
    }

    // Export companies
    export(extension, full = false) {
        this.loaded = false;
        this.extension = extension;

        if (!full) {
            this.retrieveCompaniesService.loadNextCompanies(this.totalCompanies);
            this.retrieveCompaniesService.retrieveCompanies.subscribe(
                (companies: Company[]) => {
                    if (!this.loaded) {
                        this.loaded = true;
                        this.companies = companies;
                        this.retrieveExport(this.extension);
                    }
                }
            );
        } else {
            window.location.href = this.urlExport + extension;
        }
    }

    // Retrieve good function of export by extension name
    retrieveExport(extension) {
        switch (extension) {
            case Extensions.CSV:
                this.exportService.exportCsv(this.companies);
                break;
            case Extensions.JSON:
                this.exportService.exportJson(this.companies);
                break;
            case Extensions.XLS:
                this.exportService.exportExcel(this.companies);
                break;
        }
        this.retrieveCompaniesService.loadNextCompanies(ExportComponent.MAX_ROWS);
    }
}
