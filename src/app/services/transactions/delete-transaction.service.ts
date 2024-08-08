import { Injectable, Logger } from '@nestjs/common';

import { TransactionRepository } from '@/app/repositories';
@Injectable()
export class DeleteTransactionService {
  private logger = new Logger('DeleteTransactionService');

  constructor(private readonly transactionRepository: TransactionRepository) {}

  async execute(id: string): Promise<void> {
    try {
      await this.transactionRepository.delete(id);
    } catch (error) {
      this.logger.error(`Erro trying delete transaction: ${id}`, error.message);
      throw error;
    }
  }
}
