import { Transaction } from '@/app/entities';
import {TransactionRepository} from '@/app/repositories'
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../connection';
import { TransactionMapper } from '../mappers';

@Injectable()
export class PrismaTransactionRepository implements TransactionRepository {
  
  constructor(private readonly prismaService: PrismaService){}
  
  async list(): Promise<Transaction[]> {
    const transactions = await this.prismaService.transaction.findMany()
    return transactions.map(TransactionMapper.toApp)
  }
}