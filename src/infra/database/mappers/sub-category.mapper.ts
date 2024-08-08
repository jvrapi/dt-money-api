import {
  Category as PrismaCategory,
  SubCategory as PrismaSubCategory,
} from '@prisma/client';

import { SubCategory } from '@/app/entities';

import { CategoryMapper } from './category.mapper';

interface Raw extends PrismaSubCategory {
  category?: PrismaCategory;
}

export class SubCategoryMapper {
  static toApp(raw: Raw) {
    const subCategory = new SubCategory({
      id: raw.id,
      name: raw.name,
      categoryId: raw.categoryId,
      updatedAt: raw.updatedAt,
      createdAt: raw.createdAt,
    });

    if (raw.category) {
      subCategory.setCategory(CategoryMapper.toApp(raw.category));
    }

    return subCategory;
  }
}
