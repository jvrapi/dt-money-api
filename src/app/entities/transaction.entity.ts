import { ITransaction, TransactionType } from '@/types';

export class Transaction implements ITransaction {
  id: string;
  description: string;
  type: TransactionType;
  price: number;
  category: string;
  createdAt: Date;
  updatedAt: Date;

  constructor(props: ITransaction) {
    this.id = props.id;
    this.description = props.description;
    this.type = props.type;
    this.price = props.price;
    this.category = props.category;
    this.createdAt = props.createdAt;
    this.updatedAt = props.updatedAt;
  }
}
