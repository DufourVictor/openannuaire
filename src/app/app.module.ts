import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {HttpModule} from '@angular/http';
import { ListCompaniesComponent } from './list-companies/list-companies.component';

@NgModule({
    declarations: [
        AppComponent,
        ListCompaniesComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
