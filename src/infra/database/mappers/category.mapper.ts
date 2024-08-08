import {
  Category as PrismaCategory,
  SubCategory as PrismaSubCategory,
} from '@prisma/client';

import { Category } from '@/app/entities';

import { SubCategoryMapper } from './sub-category.mapper';

interface Raw extends PrismaCategory {
  subCategories?: PrismaSubCategory[];
}

export class CategoryMapper {
  static toApp(raw: Raw) {
    const category = new Category({
      id: raw.id,
      description: raw.description,
      createdAt: raw.createdAt,
      updatedAt: raw.updatedAt,
      name: raw.name,
    });

    if (raw.subCategories.length) {
      raw.subCategories.forEach((subcategory) => {
        category.addSubCategory(SubCategoryMapper.toApp(subcategory));
      });
    }

    return category;
  }
}
