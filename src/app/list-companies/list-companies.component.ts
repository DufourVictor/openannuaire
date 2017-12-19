import {Component, ViewChild, OnInit} from '@angular/core';
import {CompanyInterface} from '../company-interface';
import {MatTableDataSource, MatSort, MatPaginator} from '@angular/material';
import {RetrieveCompaniesService} from '../retrieve-companies.service';

@Component({
    selector: 'app-list-companies',
    templateUrl: './list-companies.component.html',
    styleUrls: ['./list-companies.component.scss'],
})

export class ListCompaniesComponent implements OnInit {
    displayedColumns = ['siren', 'name', 'address', 'postal_code', 'city'];
    dataSource: MatTableDataSource<CompanyInterface>;

    @ViewChild(MatSort) sort: MatSort;
    @ViewChild(MatPaginator) paginator: MatPaginator;

    constructor(private retrieveCompaniesService: RetrieveCompaniesService) {
    }

    ngOnInit() {
        this.retrieveCompaniesService.retrieveCompanies.subscribe((data: CompanyInterface[]) => {
            this.dataSource = new MatTableDataSource<CompanyInterface>(data);
            this.dataSource.sort = this.sort;
            this.dataSource.paginator = this.paginator;
        });
    }
}
