import { ITransaction, ITransactionProps, TransactionType } from '@/types';

import { SubCategory } from './sub-category.entity';

export class Transaction implements ITransaction {
  id: string;
  description: string;
  type: TransactionType;
  price: number;
  categoryId: string;
  createdAt: Date;
  updatedAt: Date;
  subCategory: SubCategory;

  constructor(props: ITransactionProps) {
    this.id = props.id;
    this.description = props.description;
    this.type = props.type;
    this.price = props.price;
    this.createdAt = props.createdAt;
    this.updatedAt = props.updatedAt;
    this.categoryId = props.categoryId;
  }

  setSubCategory(subCategory: SubCategory) {
    this.subCategory = subCategory;
  }
}
