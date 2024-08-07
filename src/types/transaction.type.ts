export type ITransactionType = 'income' | 'outcome';

export interface ITransaction {
  id: string;
  description: string;
  type: ITransactionType;
  price: number;
  category: string;
  createdAt: Date;
  updatedAt: Date;
}

export type ICreateTransaction = Omit<
  ITransaction,
  'id' | 'createdAt' | 'updatedAt'
>;
