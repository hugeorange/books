import { Model } from 'sequelize-typescript';
export declare class Bill extends Model {
    id: number;
    pay_type: number;
    amount: string;
    type_id: number;
    user_id: number;
    type_name: string;
    date: Date;
    remark: string;
}
