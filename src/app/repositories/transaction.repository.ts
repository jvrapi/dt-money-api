import { ISaveTransaction } from '@/types';

import { Transaction } from '../entities';

export abstract class TransactionRepository {
  abstract findAll(): Promise<Transaction[]>;
  abstract save(transaction: ISaveTransaction): Promise<Transaction>;
  abstract delete(id: string): Promise<void>;
}
