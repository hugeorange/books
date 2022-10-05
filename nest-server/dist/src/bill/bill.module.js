"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BillModule = void 0;
const common_1 = require("@nestjs/common");
const bill_controller_1 = require("./bill.controller");
const bill_service_1 = require("./bill.service");
const sequelize_1 = require("@nestjs/sequelize");
const bill_model_1 = require("./bill.model");
let BillModule = class BillModule {
};
BillModule = __decorate([
    (0, common_1.Module)({
        controllers: [bill_controller_1.BillController],
        providers: [bill_service_1.BillService],
        imports: [sequelize_1.SequelizeModule.forFeature([bill_model_1.Bill])],
    })
], BillModule);
exports.BillModule = BillModule;
//# sourceMappingURL=bill.module.js.map