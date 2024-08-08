import { ICategory, ICategoryProps, ISubCategory } from '@/types';

export class Category implements ICategory {
  id: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
  subCategories: ISubCategory[] = [];

  constructor(props: ICategoryProps) {
    this.id = props.id;
    this.name = props.name;
    this.createdAt = props.createdAt;
    this.updatedAt = props.updatedAt;
  }

  addSubCategory(subCategory: ISubCategory) {
    this.subCategories.push(subCategory);
  }
}
