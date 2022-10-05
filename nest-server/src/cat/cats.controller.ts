import { Controller, Get, Post, Body } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { CatService } from './cats.service';
import { Cat } from './interface/cat.interface';

@Controller('cats')
export class CatsController {
  constructor(private catService: CatService) {}

  @Post()
  async create(@Body() createDto: CreateCatDto) {
    const result = this.catService.create(createDto);
    return result;
  }

  @Get()
  findAll(): Cat[] {
    return this.catService.findAll();
  }
}
