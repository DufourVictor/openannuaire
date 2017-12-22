import {Component, OnInit} from '@angular/core';
import {Company} from '../Model/company';
import {RetrieveCompaniesService} from '../retrieve-companies.service';
import {ExportService} from '../export.service';

@Component({
    selector: 'app-export',
    templateUrl: './export.component.html',
    styleUrls: ['./export.component.scss']
})
export class ExportComponent implements OnInit {
    companies: Company[];

    constructor(private retrieveCompaniesService: RetrieveCompaniesService, private exportService: ExportService) {
        this.retrieveCompaniesService.retrieveCompanies.subscribe(
            (companies: Company[]) => this.companies = companies
        );
    }

    ngOnInit() {
        this.retrieveCompaniesService.getCompanies();
    }

    exportCompaniesCsv(size = null) {
        if (null === size) {
            this.exportService.exportCsv(this.companies);
        }
    }

    exportCompaniesJson(size = null) {
        if (null === size) {
            this.exportService.exportJson(this.companies);
        }
    }

    exportCompaniesXls(size = null) {
        if (null === size) {
            this.exportService.exportExcel(this.companies);
        }
    }
}
