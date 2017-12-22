export class Company {
    siren: string;
    name: string;
    address: number;
    postal_code: string;
    city: string;
    category: string;
    activity: string;
    effectif: string;
    startDate: string;

    constructor(siren, name, address, postal_code, city, category, activity, effectif, startDate) {
        this.siren = siren;
        this.name = name;
        this.address = address;
        this.postal_code = postal_code;
        this.city = city;
        this.category = category;
        this.activity = activity;
        this.effectif = effectif;
        this.startDate = startDate;
    }
}
