import { PrismaPromise } from 'prisma';
import { CrudTypeMap } from './../tyoes/crud-map-type.interface';
import { Delegate } from "../delegate/deletegate";
import { IBaseRepository } from './base-repository.interface';

export abstract class BaseRepository<TDelegate extends Delegate<TReturnType>, TTypeMap extends CrudTypeMap, TReturnType> implements IBaseRepository<TTypeMap, TReturnType> {
    constructor(protected delegate: TDelegate) {

    }

    async aggregate(args?: TTypeMap['aggregate']) {
        const result = await this.delegate.aggregate(args);
        return result;
    }
    async count(args?: TTypeMap['count']) {
        const result = await this.delegate.count(args);
        return result;
    }

    async create(args?: TTypeMap['create']) {
        const result = await this.delegate.create(args);
        return result;
    }
    async delete(args?: TTypeMap['delete']) {
        const result = this.delegate.delete(args);
        return result;
    }
    async deleteMany(args?: TTypeMap['deleteMany']) {
        const result = await this.delegate.deleteMany(args);
        return result.count;
    }
    async findFirst(args?: TTypeMap['findFirst']) {
        const result = await this.delegate.findFirst(args);
        return result;
    }
    async findMany(args?: TTypeMap['findMany']) {
        const result = await this.delegate.findMany(args);
        return result;
    }
    async findUnique(args?: TTypeMap['findUnique']) {
        const result = await this.delegate.findUnique(args);
        return result;
    }
    async update(args?: TTypeMap['update']) {
        const result = await this.delegate.update(args);
        return result;
    }
    async updateMany(args?: TTypeMap['updateMany']) {
        const result = await this.delegate.updateMany(args);
        return result.count;
    }
    async upsert(args?: TTypeMap['upsert']) {
        const result = await this.delegate.upsert(args);
        return result;
    }
}