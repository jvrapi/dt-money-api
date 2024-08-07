export interface ITransaction {
  id: string;
  description: string;
  type: 'income' | 'outcome';
  price: number;
  category: string;
  createdAt: Date;
  updatedAt: Date;
}

export type ICreateTransaction = Omit<
  ITransaction,
  'id' | 'createdAt' | 'updatedAt'
>;
