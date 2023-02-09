import { Prisma } from '@prisma/client';
import { CrudTypeMap } from "../tyoes/crud-map-type.interface";

export abstract class IBaseRepository<T extends CrudTypeMap, TReturnType> {
    abstract aggregate(args?: T['aggregate']): unknown;
    abstract count(args?: T['count']): Promise<number>;
    abstract create(args?: T['create']): Promise<TReturnType>;
    abstract delete(args?: T['delete']): Promise<TReturnType>;
    abstract deleteMany(args?: T['deleteMany']): Promise<number>;
    abstract findFirst(args?: T['findFirst']): Promise<TReturnType>;
    abstract findMany(args?: T['findMany']): Promise<TReturnType[]>;
    abstract findUnique(args?: T['findUnique']): Promise<TReturnType>;
    abstract update(args?: T['update']): Promise<TReturnType>;
    abstract updateMany(args?: T['updateMany']): Promise<number>;
    abstract upsert(args?: T['upsert']): Promise<TReturnType>;
}