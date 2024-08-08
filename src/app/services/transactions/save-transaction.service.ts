import { Injectable, Logger } from '@nestjs/common';

import { TransactionRepository } from '@/app/repositories';
import { ISaveTransaction } from '@/types';

@Injectable()
export class SaveTransactionService {
  private logger = new Logger(SaveTransactionService.name);
  constructor(private readonly transactionRepository: TransactionRepository) {}

  async execute(saveTransaction: ISaveTransaction) {
    try {
      return await this.transactionRepository.save(saveTransaction);
    } catch (e) {
      this.logger.error(e);
      throw e;
    }
  }
}
