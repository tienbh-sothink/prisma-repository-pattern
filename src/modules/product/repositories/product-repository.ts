import { Injectable } from '@nestjs/common';
import { Prisma, Product } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { BaseRepository } from "src/shared/prisma/repositories/base-repository";
import { ProductEntity } from '../models/product.entity';
import { ProductTypeMap } from '../types/product-type-map';
import { IProductRepository } from './product-repository.interface';

@Injectable()
export class ProductRepository extends BaseRepository<Prisma.ProductDelegate<undefined>, ProductTypeMap, Product> implements IProductRepository {
    constructor(private readonly _prisma: PrismaService) {
        super(_prisma.product);
    }

    async getAllProductAvailable(): Promise<Product[]> {
        return await this.findMany();
    }
}