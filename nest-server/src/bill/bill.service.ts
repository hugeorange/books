import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Bill } from './bill.model';

@Injectable()
export class BillService {
  constructor(
    @InjectModel(Bill)
    private billModel: typeof Bill,
  ) {}

  findAll(): Promise<Bill[]> {
    return this.billModel.findAll();
  }

  find(id: string): Promise<Bill> {
    return this.billModel.findOne({ where: { id } });
  }
}
