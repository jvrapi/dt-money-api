import { Transaction } from '../entities';

export abstract class TransactionRepository {
  abstract findAll(): Promise<Transaction[]>;
}
