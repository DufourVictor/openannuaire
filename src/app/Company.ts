export class Company {
    activity: string;
    address: string;
    capital: number;
    city: string;
    legal_form: string;
    best_name: string;
    postal_code: string;
    radie: boolean;
    siren: string;

    constructor (activity, address, capital, city, legal_form, best_name, postal_code, radie, siren) {
        this.activity = activity;
        this.address = address;
        this.capital = capital;
        this.city = city;
        this.legal_form = legal_form;
        this.best_name = best_name;
        this.postal_code = postal_code;
        this.radie = radie;
        this.siren = siren;
    }
}
