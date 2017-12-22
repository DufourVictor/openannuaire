import {Component, ViewChild, OnInit} from '@angular/core';
import {MatTableDataSource, MatSort, MatPaginator} from '@angular/material';
import {RetrieveCompaniesService} from '../retrieve-companies.service';
import {Company} from '../Model/company';

@Component({
    selector: 'app-list-companies',
    templateUrl: './list-companies.component.html',
    styleUrls: ['./list-companies.component.scss'],
})

export class ListCompaniesComponent implements OnInit {
    displayedColumns = ['siren', 'name', 'address', 'postal_code', 'city', 'category', 'activity', 'effectif', 'startDate'];
    dataSource: MatTableDataSource<Company>;

    @ViewChild(MatSort) sort: MatSort;
    @ViewChild(MatPaginator) paginator: MatPaginator;

    constructor(private retrieveCompaniesService: RetrieveCompaniesService) {
    }

    ngOnInit() {
        this.retrieveCompaniesService.retrieveCompanies.subscribe((data: Company[]) => {
            this.dataSource = new MatTableDataSource<Company>(data);
            this.dataSource.sort = this.sort;
            this.dataSource.paginator = this.paginator;
        });

        this.retrieveCompaniesService.getCompanies();
    }
}
