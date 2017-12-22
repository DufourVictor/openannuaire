import {Injectable} from '@angular/core';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';
import {Angular2Csv} from 'angular2-csv';
import {Company} from "./Model/company";
import {Extensions} from "./Enums/extensions.enum";

const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const JSON_TYPE = 'application/json;charset=UTF-8';

@Injectable()
export class ExportService {
    companies: Company[];

    /**
     * CSV Export
     * @param companies
     */
    exportCsv(companies: Company[]) {
        this.companies = this.convertDataExport(companies);

        const head = [
            'Siret',
            'Nom',
            'Adresse',
            'Code postal',
            'Ville',
            'Catégorie',
            'Activité',
            'Effectif',
            'Date de création'
        ];
        const options = {
            fieldSeparator: ';',
            headers: head,
        };

        new Angular2Csv(this.companies, 'CSV - Export des entreprises - Openannuaire', options);
    }

    /**
     * JSON Export
     * @param companies
     */
    exportJson(companies: Company[]) {
        this.companies = this.convertDataExport(companies);

        const data: Blob = new Blob([JSON.stringify(this.companies)], {
            type: JSON_TYPE
        });
        FileSaver.saveAs(data, 'JSON - Export des entreprises - Openannuaire.' + Extensions.JSON);
    }

    /**
     * Excel Export
     * @param companies
     */
    exportExcel(companies: Company[]) {
        this.companies = this.convertDataExport(companies);

        const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.companies);
        const workbook: XLSX.WorkBook = {Sheets: {'data': worksheet}, SheetNames: ['data']};
        const excelBuffer: any = XLSX.write(workbook, {bookType: 'xlsx', type: 'buffer'});
        const data: Blob = new Blob([excelBuffer], {
            type: EXCEL_TYPE
        });
        FileSaver.saveAs(data, 'Excel - Export des entreprises - Openannuaire');
    }

    /**
     * Convert data for export
     * @param companies
     * @returns {Array}
     */
    convertDataExport(companies: Company[]) {
        const arrayCompanies = [];

        companies.forEach(company => {
            arrayCompanies.push((new Company(
                company.siren,
                company.name,
                company.address,
                company.postal_code,
                company.city,
                company.category,
                company.activity,
                company.effectif,
                company.startDate,
                company.coordonnees,
            )).getExportData());
        });

        return arrayCompanies;
    }
}
