import { ISaveTransaction } from '@/types';

import { Transaction } from '../entities';

export abstract class TransactionRepository {
  abstract findById(id: string): Promise<Transaction | undefined>;
  abstract findAll(): Promise<Transaction[]>;
  abstract save(transaction: ISaveTransaction): Promise<Transaction>;
  abstract delete(id: string): Promise<void>;
}
