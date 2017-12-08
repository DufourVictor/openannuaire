import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { ListCompaniesComponent } from './list-companies/list-companies.component';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule, MatPaginatorModule} from '@angular/material';
import { AppRoutingModule } from './/app-routing.module';

@NgModule({
    declarations: [
        AppComponent,
        ListCompaniesComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        MatTableModule,
        MatSortModule,
        MatPaginatorModule,
        AppRoutingModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
