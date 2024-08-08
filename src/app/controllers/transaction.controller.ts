import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { CreateTransactionDTO } from '../dtos';
import {
  ListTransactionsService,
  SaveTransactionService,
} from '../services/transactions';

@ApiTags('transactions')
@Controller('transactions')
export class TransactionController {
  constructor(
    private readonly listTransactionService: ListTransactionsService,
    private readonly saveTransactionService: SaveTransactionService,
  ) {}

  @Get()
  async listAllTransactions() {
    return await this.listTransactionService.execute();
  }

  @Post()
  async createTransaction(@Body() transaction: CreateTransactionDTO) {
    await this.saveTransactionService.execute(transaction);
  }
}
