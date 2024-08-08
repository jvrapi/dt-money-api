import { Injectable } from '@nestjs/common';

import { Transaction } from '@/app/entities';
import { TransactionRepository } from '@/app/repositories';

import { PrismaService } from '../connection';
import { TransactionMapper } from '../mappers';

@Injectable()
export class PrismaTransactionRepository implements TransactionRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async findAll(): Promise<Transaction[]> {
    const transactions = await this.prismaService.transaction.findMany({
      include: {
        Subcategory: {
          include: {
            Category: true,
          },
        },
      },
    });
    return transactions.map(TransactionMapper.toApp);
  }
}
