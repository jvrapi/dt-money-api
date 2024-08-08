import { ISubCategory, ISubCategoryProps } from '@/types';

import { Category } from './category.entity';

export class SubCategory implements ISubCategory {
  id: string;
  name: string;
  categoryId: string;
  updatedAt: Date;
  createdAt: Date;
  category: Category;

  constructor(subCategory: ISubCategoryProps) {
    this.id = subCategory.id;
    this.name = subCategory.name;
    this.categoryId = subCategory.categoryId;
    this.updatedAt = subCategory.updatedAt;
    this.createdAt = subCategory.createdAt;
  }

  setCategory(category: Category) {
    this.category = category;
  }
}
