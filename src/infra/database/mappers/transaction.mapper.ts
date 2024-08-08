import {
  SubCategory as PrismaSubCategory,
  Transaction as PrismaTransaction,
} from '@prisma/client';

import { Transaction } from '@/app/entities';
import { TransactionType } from '@/types';

import { SubCategoryMapper } from './sub-category.mapper';

interface Raw extends PrismaTransaction {
  subcategory?: PrismaSubCategory;
}

export class TransactionMapper {
  static toApp(raw: Raw): Transaction {
    const transaction = new Transaction({
      ...raw,
      price: Number(raw.price),
      type: raw.type as TransactionType,
      categoryId: raw.categoryId,
    });

    if (raw.subcategory) {
      transaction.setSubCategory(SubCategoryMapper.toApp(raw.subcategory));
    }

    return transaction;
  }
}
