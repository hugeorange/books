import { Module } from '@nestjs/common';

import { BillController } from './bill.controller';
import { BillService } from './bill.service';

import { SequelizeModule } from '@nestjs/sequelize';
import { Bill } from './bill.model';

@Module({
  controllers: [BillController],
  providers: [BillService],
  imports: [SequelizeModule.forFeature([Bill])],
})
export class BillModule {}
