import { Module } from '@nestjs/common';

import { CategoryRepository, TransactionRepository } from '@/app/repositories';

import { PrismaService } from '../database/connection';
import {
  PrismaCategoryRepository,
  PrismaTransactionRepository,
} from '../database/repositories';

@Module({
  providers: [
    {
      provide: TransactionRepository,
      useClass: PrismaTransactionRepository,
    },
    {
      provide: CategoryRepository,
      useClass: PrismaCategoryRepository,
    },
    PrismaService,
  ],
  exports: [CategoryRepository, TransactionRepository],
})
export class DatabaseModule {}
