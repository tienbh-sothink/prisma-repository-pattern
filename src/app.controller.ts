import { Controller, Get } from '@nestjs/common';
import { IProductService } from './modules/product/services/product-service.interface';

@Controller()
export class AppController {
  constructor() {}

  @Get()
  getHello(): string {
    return 'hello world';
  }
}
