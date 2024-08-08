import { Prisma } from '@prisma/client';

import { SubCategory } from '@/app/entities';

import { CategoryMapper } from './category.mapper';

type Raw = Prisma.SubCategoryGetPayload<{
  include: {
    Category: true;
  };
}>;

export class SubCategoryMapper {
  static toApp(raw: Raw) {
    const subCategory = new SubCategory({
      id: raw.id,
      name: raw.name,
      categoryId: raw.categoryId,
      updatedAt: raw.updatedAt,
      createdAt: raw.createdAt,
    });

    if (raw.Category) {
      subCategory.setCategory(CategoryMapper.toApp(raw.Category));
    }

    return subCategory;
  }
}
