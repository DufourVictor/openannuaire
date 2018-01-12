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
    private urlExport = 'https://data.opendatasoft.com/explore/dataset/sirene@public/download/?timezone=Europe/Berlin&use_labels_for_header=true&format=';
    companies: Company[];

    constructor(private retrieveCompaniesService: RetrieveCompaniesService, private exportService: ExportService) {
        this.retrieveCompaniesService.retrieveCompanies.subscribe(
            (companies: Company[]) => this.companies = companies
        );
    }

    ngOnInit() {
        this.retrieveCompaniesService.getCompanies();
    }

    export(extension, full = false) {
        switch (extension) {
            case Extensions.CSV:
                if (false === full) {
                    this.exportService.exportCsv(this.companies);
                } else {
                    window.location.href = this.urlExport + Extensions.CSV;
                }
                break;
            case Extensions.JSON:
                if (false === full) {
                    this.exportService.exportJson(this.companies);
                } else {
                    window.location.href = this.urlExport + Extensions.JSON;
                }
                break;
            case Extensions.XLS:
                if (false === full) {
                    this.exportService.exportExcel(this.companies);
                } else {
                    window.location.href = this.urlExport + Extensions.XLS;
                }
                break;
        }
    }
}
