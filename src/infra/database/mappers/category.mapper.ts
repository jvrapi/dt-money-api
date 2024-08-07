import { Category as Raw } from '@prisma/client';

import { Category } from '@/app/entities';

export class CategoryMapper {
  static toApp(raw: Raw) {
    const category = new Category({
      id: raw.id,
      description: raw.description,
      createdAt: raw.createdAt,
      updatedAt: raw.updatedAt,
      name: raw.name,
    });

    return category;
  }
}
