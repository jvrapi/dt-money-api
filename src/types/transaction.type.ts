export enum TransactionType {
  INCOME = 'income',
  OUTCOME = 'outcome'
}

export interface ITransaction {
  id: string
  description: string
  type: TransactionType
  price: number
  category: string
  createdAt: Date
  updatedAt: Date
}