import { ISubCategory } from './sub-category.type';

export enum TransactionType {
  INCOME = 'income',
  OUTCOME = 'outcome',
}

export interface ITransactionProps {
  id: string;
  description: string;
  subCategoryId: string;
  type: TransactionType;
  price: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface ITransaction extends ITransactionProps {
  subCategory: ISubCategory;
}

export type ISaveTransaction = PartialBy<Omit<
  ITransactionProps,
  'createdAt' | 'updatedAt'
>, 'id'>;
