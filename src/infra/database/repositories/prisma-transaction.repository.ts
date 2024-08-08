import { Injectable } from '@nestjs/common';
import { Transaction as PrismaTransaction } from '@prisma/client';

import { Transaction } from '@/app/entities';
import { TransactionRepository } from '@/app/repositories';
import { ISaveTransaction } from '@/types';

import { PrismaService } from '../connection';
import { TransactionMapper } from '../mappers';

@Injectable()
export class PrismaTransactionRepository implements TransactionRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async findAll(): Promise<Transaction[]> {
    const transactions = await this.prismaService.transaction.findMany({
      include: {
        subcategory: {
          include: {
            category: true,
          },
        },
      },
    });
    return transactions.map(TransactionMapper.toApp);
  }

  async save(transactionData: ISaveTransaction): Promise<Transaction> {
    let transaction: PrismaTransaction;
    if (transactionData?.id) {
      transaction = await this.prismaService.transaction.update({
        where: { id: transactionData.id },
        data: transactionData,
      });
    } else {
      transaction = await this.prismaService.transaction.create({
        data: transactionData,
      });
    }
    return TransactionMapper.toApp(transaction);
  }

  async delete(id: string): Promise<void> {
    await this.prismaService.transaction.delete({ where: { id } });
  }
}
