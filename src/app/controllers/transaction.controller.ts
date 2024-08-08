import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Res,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Response } from 'express';

import { SaveTransactionDTO } from '../dtos';
import {
  DeleteTransactionService,
  ListTransactionsService,
  SaveTransactionService,
} from '../services/transactions';

@ApiTags('transactions')
@Controller('transactions')
export class TransactionController {
  constructor(
    private readonly listTransactionService: ListTransactionsService,
    private readonly saveTransactionService: SaveTransactionService,
    private readonly deleteTransactionService: DeleteTransactionService,
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

  @Delete(':id')
  async deleteTransaction(@Res() response: Response, @Param('id') id: string) {
    await this.deleteTransactionService.execute(id);

    return response.status(204).send();
  }
}
