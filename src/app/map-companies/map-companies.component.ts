import {Component, Injectable, OnInit} from '@angular/core';
import {RetrieveCompaniesService} from '../retrieve-companies.service';
import {Company} from '../Model/company';
import {HttpClient} from '@angular/common/http';

@Component({
    selector: 'app-map-companies',
    templateUrl: './map-companies.component.html',
    styleUrls: ['./map-companies.component.scss']
})
@Injectable()
export class MapCompaniesComponent implements OnInit {
    companies: Company[];
    styles;
    lat: number;
    lng: number;
    totalCompanies: number;
    loaded: boolean = false;

    constructor(private retrieveCompaniesService: RetrieveCompaniesService, private http: HttpClient) {
        this.retrieveCompaniesService.totalCompanies.subscribe((total: number) => {
            this.totalCompanies = total;

            if (this.loaded) {
                this.loadCompanies();
            }
        });
    }

    ngOnInit(): void {
        this.retrieveCompaniesService.loadNextCompanies(this.retrieveCompaniesService.maxRows);
        this.loadCompanies();

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((pos) => {
                this.lat = pos.coords.latitude;
                this.lng = pos.coords.longitude;
            });
        }
        this.http.get('./assets/mapstyle.json').subscribe(data => {
          this.styles = data['styles'];
        });
    }

    // Load companies on map
    loadCompanies(): void {
        if (this.loaded) {
            this.loaded = false;
            this.retrieveCompaniesService.loadNextCompanies(this.retrieveCompaniesService.nhits);
        }
        this.retrieveCompaniesService.retrieveCompanies.subscribe((companies: Company[]) => {
            this.companies = [];
            companies.forEach((company: Company) => {
                if (undefined !== company.coordonnees) {
                    this.companies.push(company);
                }
            });

            this.loaded = !this.loaded;
        });
    }
}
