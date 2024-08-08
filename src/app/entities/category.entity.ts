import { ICategory, ICategoryProps } from '@/types';

import { SubCategory } from './sub-category.entity';

export class Category implements ICategory {
  id: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
  subCategories: SubCategory[] = [];

  constructor(props: ICategoryProps) {
    this.id = props.id;
    this.name = props.name;
    this.createdAt = props.createdAt;
    this.updatedAt = props.updatedAt;
  }

  addSubCategory(subCategory: SubCategory) {
    this.subCategories.push(subCategory);
  }
}
