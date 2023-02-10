import { Product } from '@prisma/client';
import {
    Controller,
    Post,
    Body,
    Get,
    Param,
    Delete,
    Put,
    Res,
} from '@nestjs/common';
import { IProductService } from './services/product-service.interface';
import { BaseController } from 'src/shared/base/controllers/base.controller';

@Controller('products')
export class ProductController extends BaseController {
    constructor(private readonly _productService: IProductService) {
        super();
    }

    @Get()
    async getAll(@Res() res) {
        const result = await this._productService.getAllProduct();
        return this.response(res, result);
    }

    @Get(':id')
    async getOne(@Res() res, @Param('id') id: string) {
        const result = await this._productService.getProductById(
            Number.parseInt(id),
        );
        return this.response(res, result);
    }

    @Put(':id')
    async update(
        @Res() res,
        @Param('id') id: string,
        @Body() product: Product,
    ) {
        const result = await this._productService.update(
            Number.parseInt(id),
            product,
        );
        return this.response(res, result);
    }

    @Post()
    async create(@Res() res, @Body() product: Product) {
        const result = await this._productService.create(product);
        return this.response(res, result);
    }

    @Delete(':id')
    async remove(@Res() res, @Param('id') id: string) {
        const result = await this._productService.remove(Number.parseInt(id));
        return this.response(res, result);
    }

    @Delete('/remove-many/:ids')
    async removeMany(@Res() res, @Param('ids') ids: string) {
        const result = await this._productService.removeMany();
        return this.response(res, result);
    }
}
