import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { ListTransactionsService } from '../services/transactions';

@ApiTags('transactions')
@Controller('transactions')
export class TransactionController {
  constructor(
    private readonly listTransactionService: ListTransactionsService,
  ) {}

  @Get()
  async listAllTransactions() {
    return await this.listTransactionService.execute();
  }
}
