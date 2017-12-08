import {CompanyInterface} from './company-interface';

export interface FirmApiInterface {
    status: string;
    params: {};
    companies: CompanyInterface[];
}
