import { Bill } from './bill.model';
export declare class BillService {
    private billModel;
    constructor(billModel: typeof Bill);
    findAll(): Promise<Bill[]>;
    find(id: string): Promise<Bill>;
}
