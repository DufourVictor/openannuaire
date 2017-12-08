export interface CompanyInterface {
    activity: string;
    address: string;
    administration: string;
    capital: number;
    city: string;
    established_on: string;
    id: number;
    last_legal_update: string;
    legal_form: string;
    names: {
        best: string;
        commercial_name: string;
        denomination: string;
        first_name: string;
        last_name: string;
        sigle: string;
    };
    postal_code: string;
    radie: boolean;
    siren: string;
    vat_number: string;
}
