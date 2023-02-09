import { ProductEntity } from './../models/product.entity';
import { Injectable } from '@nestjs/common';
import { IProductRepository } from "../repositories/product-repository.interface";
import { IProductService } from "./product-service.interface";

@Injectable()
export class ProductService implements IProductService {
    constructor (private readonly _productRepository: IProductRepository) {

    }

    async getProductById(id: number): Promise<any> {
        const result = await this._productRepository.findUnique({
            where: {
                id
            }
        });

        return result;
    }

    async update(id: number, product: ProductEntity) {
        const result = await this._productRepository.update({
            where: {
                id
            },
            data: product
        })

        return result;
    }

    async remove(id: number) {
        const result = await this._productRepository.delete({
            where: {
                id
            }
        })

        return result;
    }

    create(product: ProductEntity) {
        this._productRepository.create({
            data: product
        });
    }

    async getAllProduct(): Promise<any[]> {
        return this._productRepository.findMany();
    }
}