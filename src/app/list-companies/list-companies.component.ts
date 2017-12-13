import {Component, OnInit, ViewChild} from '@angular/core';
import {RetrieveCompaniesService} from '../retrieve-companies.service';
import {CompanyInterface} from '../company-interface';
import {MatTableDataSource, MatSort, MatPaginator} from '@angular/material';

@Component({
    selector: 'app-list-companies',
    templateUrl: './list-companies.component.html',
    styleUrls: ['./list-companies.component.scss'],
    providers: [RetrieveCompaniesService]
})

export class ListCompaniesComponent implements OnInit {
    companies: CompanyInterface[];
    displayedColumns = ['siren', 'name', 'address', 'postal_code', 'city'];
    dataSource: MatTableDataSource<CompanyInterface>;

    @ViewChild(MatSort) sort: MatSort;
    @ViewChild(MatPaginator) paginator: MatPaginator;

    constructor(private retrieveCompaniesService: RetrieveCompaniesService) {
    }

    ngOnInit(): void {
        this.retrieveCompaniesService.getCompanies().subscribe(data => {
            this.companies = data.companies as CompanyInterface[];
            this.dataSource = new MatTableDataSource<CompanyInterface>(this.companies);
            this.dataSource.sort = this.sort;
            this.dataSource.paginator = this.paginator;
        });
    }
}
