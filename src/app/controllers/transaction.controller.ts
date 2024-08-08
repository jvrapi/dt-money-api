import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { SaveTransactionDTO } from '../dtos';
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
  async createTransaction(@Body() transaction: SaveTransactionDTO) {
    await this.saveTransactionService.execute(transaction);
  }

  @Put(':id')
  async updateTransaction(
    @Param('id') id: string,
    @Body() transaction: SaveTransactionDTO,
  ) {
    await this.saveTransactionService.execute({ ...transaction, id });
    return { id };
  }
}
