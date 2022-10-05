import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import { AllExceptionFilter } from './core/filters/all-exception.filter';
import { ResponseInterceptor } from './core/interceptors/response.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api'); // 设置全局路由前缀
  app.useGlobalFilters(new AllExceptionFilter());
  app.useGlobalInterceptors(new ResponseInterceptor());
  await app.listen(3000);
}
bootstrap();
