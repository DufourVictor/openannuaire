import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { NavbarComponent } from './navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
=======
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
>>>>>>> 4d67da91cb63ca84b0576ca20fe04ff04733840b
})
export class AppModule {
}
