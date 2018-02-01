import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapCompaniesComponent } from './map-companies.component';

describe('MapCompaniesComponent', () => {
  let component: MapCompaniesComponent;
  let fixture: ComponentFixture<MapCompaniesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapCompaniesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapCompaniesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
