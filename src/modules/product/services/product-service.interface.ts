import { Product } from '@prisma/client';
import { Result } from 'src/shared/base/domain/result';
export abstract class IProductService {
    abstract getAllProduct(): Promise<Result<Product[]>>;
    abstract getProductById(id: number): Promise<Result<Product>>;
    abstract create(product: Product): Promise<Result<Product>>;
    abstract update(id: number, product: Product): Promise<Result<Product>>;
    abstract remove(id: number): Promise<Result<Product>>;
    abstract removeMany(): Promise<Result<number>>;
}