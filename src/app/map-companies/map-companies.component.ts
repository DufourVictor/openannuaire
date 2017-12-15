import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-map-companies',
  templateUrl: './map-companies.component.html',
  styleUrls: ['./map-companies.component.scss']
})
export class MapCompaniesComponent implements OnInit {

  title: 'test';
  lat: number = 51.678418;
  lng: number = 7.809007;

  constructor() { }

  ngOnInit() {
  }

}
