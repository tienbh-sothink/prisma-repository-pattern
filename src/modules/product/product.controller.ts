import { ProductEntity } from './models/product.entity';
import { Controller, Post, Body, Inject, Get, Param, Delete, Put } from '@nestjs/common';
import { IProductService } from './services/product-service.interface';

@Controller('products')
export class ProductController {
  constructor(private readonly _productService: IProductService) {}

  @Get()
  async getAll() {
    const result = await this._productService.getAllProduct();
    return result;
  }

  @Get(':id')
  async getOne(@Param('id') id: string) {
    const result = await this._productService.getProductById(Number.parseInt(id));
    return result;
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() product: ProductEntity) {
    const result = await this._productService.update(Number.parseInt(id), product);
    return result;
  }

  @Post()
  async create(@Body() product: ProductEntity) {
    const result = await this._productService.create(product);
    return result;
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const result = await this._productService.remove(Number.parseInt(id));
    return result;
  }
}
