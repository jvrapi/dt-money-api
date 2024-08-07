import { Injectable, Logger } from '@nestjs/common';

import { TransactionRepository } from '../repositories';

@Injectable()
export class ListTransactionsService {
  private logger = new Logger();
  constructor(private readonly transactionRepository: TransactionRepository) {}

  async execute() {
    try {
      return this.transactionRepository.list();
    } catch (error) {
      this.logger.error(error);
    }
  }
}
