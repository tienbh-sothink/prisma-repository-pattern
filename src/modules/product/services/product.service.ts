import { Product } from '@prisma/client';
import { Injectable } from '@nestjs/common';
import { IProductRepository } from "../repositories/product-repository.interface";
import { IProductService } from "./product-service.interface";
import { Results } from 'src/shared/base/domain/result-builder';
import { Result } from 'src/shared/base/domain/result';

@Injectable()
export class ProductService implements IProductService {
    constructor (private readonly _productRepository: IProductRepository) {

    }

    async removeMany() {
        const result = await this._productRepository.deleteMany();

        return Results.success(result)
    }

    async getProductById(id: number): Promise<any> {
        const result = await this._productRepository.findUnique({
            where: {
                id
            }
        });

        return Results.success(result);
    }

    async update(id: number, product: Product) {
        const result = await this._productRepository.update({
            where: {
                id
            },
            data: product
        })

        return Results.success(result);
    }

    async remove(id: number) {
        const result = await this._productRepository.delete({
            where: {
                id
            }
        })

        return Results.success(result);
    }

    async create(product: Product) {
        const result = await this._productRepository.create({
            data: product
        });

        return Results.success(result);
    }

    async getAllProduct(): Promise<Result<Product[]>> {
        const result = await this._productRepository.findMany();
        if (result.length == 0) return Results.failure("Not found data");
        return Results.success(result);
    }
}