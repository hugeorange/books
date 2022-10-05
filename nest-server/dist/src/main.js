"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const all_exception_filter_1 = require("./core/filters/all-exception.filter");
const response_interceptor_1 = require("./core/interceptors/response.interceptor");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.setGlobalPrefix('api');
    app.useGlobalFilters(new all_exception_filter_1.AllExceptionFilter());
    app.useGlobalInterceptors(new response_interceptor_1.ResponseInterceptor());
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map