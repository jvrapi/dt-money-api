import { Prisma } from '@prisma/client';

import { Transaction } from '@/app/entities';
import { TransactionType } from '@/types';

import { SubCategoryMapper } from './sub-category.mapper';

type Raw = Prisma.TransactionGetPayload<{
  include: {
    Subcategory: {
      include: {
        Category: true;
      };
    };
  };
}>;

export class TransactionMapper {
  static toApp(raw: Raw): Transaction {
    const transaction = new Transaction({
      ...raw,
      price: Number(raw.price),
      type: raw.type as TransactionType,
      categoryId: raw.categoryId,
    });

    if (raw.Subcategory) {
      transaction.setSubCategory(SubCategoryMapper.toApp(raw.Subcategory));
    }

    return transaction;
  }
}
