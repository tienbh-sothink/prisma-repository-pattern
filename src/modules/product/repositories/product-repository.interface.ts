import { Product } from '@prisma/client';
import { IBaseRepository } from 'src/shared/prisma/repositories/base-repository.interface';
import { ProductTypeMap } from '../types/product-type-map';

export abstract class IProductRepository extends IBaseRepository<ProductTypeMap, Product> {
    abstract getAllProductAvailable(): Promise<Product[]>;
}