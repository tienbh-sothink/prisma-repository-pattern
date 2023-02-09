import { ProductEntity } from './../models/product.entity';
export abstract class IProductService {
    abstract getAllProduct(): Promise<any[]>;
    abstract getProductById(id: number): any;
    abstract create(product: ProductEntity);
    abstract update(id: number, product: ProductEntity);
    abstract remove(id: number);
}