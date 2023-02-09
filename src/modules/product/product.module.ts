import { PrismaService } from 'src/prisma.service';
import { Module } from '@nestjs/common';
import { ProductRepository } from './repositories/product-repository';
import { IProductRepository } from './repositories/product-repository.interface';
import { IProductService } from './services/product-service.interface';
import { ProductService } from './services/product.service';
import { ProductController } from './product.controller';

@Module({
  imports: [],
  exports: [],
  controllers: [ProductController],
  providers: [
    PrismaService,
    {
      provide: IProductService,
      useClass: ProductService
    },
    {
      provide: IProductRepository,
      useClass: ProductRepository,
    }
  ],
})
export class ProductModule {}
