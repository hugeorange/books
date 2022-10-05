import { ArgumentsHost, ExceptionFilter, HttpException } from '@nestjs/common';
export declare class AllExceptionFilter<T> implements ExceptionFilter {
    catch(exception: HttpException, host: ArgumentsHost): void;
}
