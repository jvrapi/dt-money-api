import { ICategory } from './category.type';

export enum TransactionType {
  INCOME = 'income',
  OUTCOME = 'outcome',
}

export interface ITransactionProps {
  id: string;
  description: string;
  categoryId: string;
  type: TransactionType;
  price: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface ITransaction extends ITransactionProps {
  category: ICategory;
}

export type ICreateTransaction = Omit<
  ITransaction,
  'id' | 'createdAt' | 'updatedAt'
>;
