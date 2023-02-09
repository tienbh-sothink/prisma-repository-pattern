import { Prisma } from '@prisma/client';
export interface Delegate<TReturnType> {
  aggregate(data: unknown): unknown;
  count(data: unknown): Promise<number>;
  create(data: unknown): Promise<TReturnType>;
  delete(data: unknown): Promise<TReturnType>;
  deleteMany(data: unknown): Promise<Prisma.BatchPayload>;
  findFirst(data: unknown): Promise<TReturnType>;
  findMany(data: unknown): Promise<TReturnType[]>;
  findUnique(data: unknown): Promise<TReturnType>;
  update(data: unknown): Promise<TReturnType>;
  updateMany(data: unknown): Promise<Prisma.BatchPayload>;
  upsert(data: unknown): Promise<TReturnType>;
}
