import { BillService } from './bill.service';
import { Controller, Get, Param } from '@nestjs/common';

@Controller('bill')
export class BillController {
  constructor(private readonly billService: BillService) {}

  @Get()
  async findAll() {
    return await this.billService.findAll();
  }
  @Get(':id')
  async findOne(@Param('id') id) {
    const res = await this.billService.find(id);
    if (res) {
      return res;
    } else {
      return null;
    }
  }
}
