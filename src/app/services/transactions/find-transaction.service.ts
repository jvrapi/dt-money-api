import { Injectable, Logger } from '@nestjs/common';

import { TransactionRepository } from '@/app/repositories';

@Injectable()
export class FindTransactionService {
  private logger = new Logger(FindTransactionService.name);
  constructor(private readonly transactionRepository: TransactionRepository) {}

  async execute(id: string) {
    try {
      return this.transactionRepository.findById(id);
    } catch (error) {
      this.logger.error(`Error on find transaction by id ${id}`, error);
      throw error;
    }
  }
}
