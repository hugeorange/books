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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bill = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
let Bill = class Bill extends sequelize_typescript_1.Model {
};
__decorate([
    (0, sequelize_typescript_1.Column)({ primaryKey: true }),
    __metadata("design:type", Number)
], Bill.prototype, "id", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], Bill.prototype, "pay_type", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Bill.prototype, "amount", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], Bill.prototype, "type_id", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], Bill.prototype, "user_id", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Bill.prototype, "type_name", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Date)
], Bill.prototype, "date", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Bill.prototype, "remark", void 0);
Bill = __decorate([
    (0, sequelize_typescript_1.Table)({
        tableName: 'bill',
        timestamps: false,
    })
], Bill);
exports.Bill = Bill;
//# sourceMappingURL=bill.model.js.map