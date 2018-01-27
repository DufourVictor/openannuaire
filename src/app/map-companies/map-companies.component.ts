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

    title: 'Google Map';
    lat: number;
    lng: number;

    constructor(private retrieveCompaniesService: RetrieveCompaniesService, private http: HttpClient) {
        this.retrieveCompaniesService.retrieveCompanies.subscribe((companies: Company[]) => {
            this.companies = companies;
        });
    }

    ngOnInit() {
        this.retrieveCompaniesService.getCompanies();
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
}
