export class Company {
    siren: string;
    best_name: string;
    capital: number;
    legal_form: string;
    address: string;
    postal_code: string;
    city: string;
    radie: false;
    activity: string;

    constructor(siren, best_name, capital, legal_form, address, postal_code, city, radie, activity) {
        this.siren = siren;
        this.best_name = best_name;
        this.capital = capital;
        this.legal_form = legal_form;
        this.address = address;
        this.postal_code = postal_code;
        this.city = city;
        this.radie = radie;
        this.activity = activity;
    }
}
