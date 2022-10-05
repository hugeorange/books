import { BillService } from './bill.service';
export declare class BillController {
    private readonly billService;
    constructor(billService: BillService);
    findAll(): Promise<import("./bill.model").Bill[]>;
    findOne(id: any): Promise<import("./bill.model").Bill>;
}
