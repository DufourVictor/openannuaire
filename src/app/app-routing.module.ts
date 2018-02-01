import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ListCompaniesComponent} from './list-companies/list-companies.component';
import {MapCompaniesComponent} from './map-companies/map-companies.component';
import {ExportComponent} from './export/export.component';
import {HelpComponent} from "./help/help.component";

const routes: Routes = [
    {path: '', component: ListCompaniesComponent},
    {path: 'map', component: MapCompaniesComponent},
    {path: 'export', component: ExportComponent},
    {path: 'help', component: HelpComponent},
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(routes),
    ],
    exports: [RouterModule],
    declarations: []
})

export class AppRoutingModule {
}
