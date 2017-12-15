import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
    @Input() parameter: string;
    @Output() filters = new EventEmitter();

    filter;

    public pathToImg = 'assets/img/Open-Annuaire.png';

    constructor() {
    }

    onFilter(filter: string) {
        this.filter = filter;
        this.filters.emit({
            name: this.parameter,
            filter: this.filter,
        });
    }
}
