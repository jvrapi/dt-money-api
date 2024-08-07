import { Transaction } from '../entities';

export abstract class TransactionRepository {
  abstract list(): Promise<Transaction[]>;
}
