import { Module } from '@nestjs/common';

import { TransactionRepository } from '@/app/repositories';

import { PrismaService } from '../database/connection';
import { PrismaTransactionRepository } from '../database/repositories';

@Module({
  providers: [
    {
      provide: TransactionRepository,
      useClass: PrismaTransactionRepository,
    },
    PrismaService,
  ],
  exports: [TransactionRepository],
})
export class DatabaseModule {}
