import {Component, ViewChild, Input} from '@angular/core';
import {CompanyInterface} from '../company-interface';
import {MatTableDataSource, MatSort, MatPaginator} from '@angular/material';

@Component({
    selector: 'app-list-companies',
    templateUrl: './list-companies.component.html',
    styleUrls: ['./list-companies.component.scss'],
})

export class ListCompaniesComponent {
    companies: CompanyInterface[];
    displayedColumns = ['siren', 'name', 'address', 'postal_code', 'city'];
    dataSource: MatTableDataSource<CompanyInterface>;

    @ViewChild(MatSort) sort: MatSort;
    @ViewChild(MatPaginator) paginator: MatPaginator;

    constructor() {
    }

    @Input('companies')
    set companiesParent(companies: CompanyInterface[]) {
        this.companies = companies;
        this.dataSource = new MatTableDataSource<CompanyInterface>(this.companies);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
    }
}
