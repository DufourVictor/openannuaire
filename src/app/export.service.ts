import {Injectable} from '@angular/core';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';
import {Angular2Csv} from 'angular2-csv';

const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';

@Injectable()
export class ExportService {
    exportCsv(companies) {
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

        new Angular2Csv(companies, 'CSV - Export des entreprises - Openannuaire', options);
    }

    exportJson(companies) {
        const data: Blob = new Blob([JSON.stringify(companies)], {
            type: 'application/json;charset=UTF-8'
        });
        FileSaver.saveAs(data, 'JSON - Export des entreprises - Openannuaire.json');
    }

    exportExcel(companies) {
        const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(companies);
        const workbook: XLSX.WorkBook = {Sheets: {'data': worksheet}, SheetNames: ['data']};
        const excelBuffer: any = XLSX.write(workbook, {bookType: 'xlsx', type: 'buffer'});
        const data: Blob = new Blob([excelBuffer], {
            type: EXCEL_TYPE
        });
        FileSaver.saveAs(data, 'Excel - Export des entreprises - Openannuaire' + EXCEL_EXTENSION);
    }
}
