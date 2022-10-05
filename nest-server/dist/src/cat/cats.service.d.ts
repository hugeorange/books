import { Cat } from './interface/cat.interface';
export declare class CatService {
    private readonly cats;
    create(cat: Cat): Cat;
    findAll(): Cat[];
}
