import { CreateCatDto } from './dto/create-cat.dto';
import { CatService } from './cats.service';
import { Cat } from './interface/cat.interface';
export declare class CatsController {
    private catService;
    constructor(catService: CatService);
    create(createDto: CreateCatDto): Promise<Cat>;
    findAll(): Cat[];
}
