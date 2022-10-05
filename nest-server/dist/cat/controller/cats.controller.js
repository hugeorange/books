"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CatsController = void 0;
const common_1 = require("@nestjs/common");
const create_cat_dto_1 = require("../dto/create-cat.dto");
const cats_service_1 = require("../service/cats.service");
let CatsController = class CatsController {
    constructor(catService) {
        this.catService = catService;
    }
    async create(createDto) {
        const result = this.catService.create(createDto);
        return result;
    }
    findAll() {
        return this.catService.findAll();
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof create_cat_dto_1.CreateCatDto !== "undefined" && create_cat_dto_1.CreateCatDto) === "function" ? _b : Object]),
    __metadata("design:returntype", Promise)
], CatsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Array)
], CatsController.prototype, "findAll", null);
CatsController = __decorate([
    (0, common_1.Controller)('cats'),
    __metadata("design:paramtypes", [typeof (_a = typeof cats_service_1.CatService !== "undefined" && cats_service_1.CatService) === "function" ? _a : Object])
], CatsController);
exports.CatsController = CatsController;
//# sourceMappingURL=cats.controller.js.map