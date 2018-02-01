import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {NavbarComponent} from './navbar/navbar.component';
import {HttpClientModule} from '@angular/common/http';
import {ListCompaniesComponent} from './list-companies/list-companies.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import {AppRoutingModule} from './app-routing.module';
import {AgmCoreModule} from '@agm/core';
import {AgmSnazzyInfoWindowModule} from '@agm/snazzy-info-window';
import * as myGlobals from './globals';
import {LoadingBarHttpClientModule} from '@ngx-loading-bar/http-client';
import {LoadingBarModule} from '@ngx-loading-bar/core';
import localeFr from '@angular/common/locales/fr';
import {registerLocaleData} from '@angular/common';
import {
    MatAutocompleteModule,
    MatButtonModule,
    MatChipsModule,
    MatIconModule,
    MatInputModule,
    MatPaginatorModule,
    MatSelectModule,
    MatSidenavModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
} from '@angular/material';
import {MapCompaniesComponent} from './map-companies/map-companies.component';
import {ExportComponent} from './export/export.component';
import { FiltersComponent } from './filters/filters.component';
import { HelpComponent } from './help/help.component';

registerLocaleData(localeFr, 'fr');
@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        SidebarComponent,
        ListCompaniesComponent,
        MapCompaniesComponent,
        ExportComponent,
        FiltersComponent,
        HelpComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatAutocompleteModule,
        MatButtonModule,
        MatChipsModule,
        MatIconModule,
        MatInputModule,
        MatPaginatorModule,
        MatSelectModule,
        MatSidenavModule,
        MatTableModule,
        MatTabsModule,
        MatToolbarModule,
        MatTooltipModule,
        AppRoutingModule,
        HttpClientModule,
        LoadingBarHttpClientModule,
        LoadingBarModule.forRoot(),
        AgmCoreModule.forRoot({
            apiKey: myGlobals.ApiKey
        }),
        AgmSnazzyInfoWindowModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
