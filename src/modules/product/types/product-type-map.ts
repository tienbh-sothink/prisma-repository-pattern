import { Prisma } from '@prisma/client';
import { CrudTypeMap } from 'src/shared/prisma/tyoes/crud-map-type.interface';

export class ProductTypeMap implements CrudTypeMap {
  aggregate: Prisma.ProductAggregateArgs;
  count: Prisma.ProductCountArgs;
  create: Prisma.ProductCreateArgs;
  delete: Prisma.ProductDeleteArgs;
  deleteMany: Prisma.ProductDeleteManyArgs;
  findFirst: Prisma.ProductFindFirstArgs;
  findMany: Prisma.ProductFindManyArgs;
  findUnique: Prisma.ProductFindUniqueArgs;
  update: Prisma.ProductUpdateArgs;
  updateMany: Prisma.ProductUpdateManyArgs;
  upsert: Prisma.ProductUpsertArgs;
}