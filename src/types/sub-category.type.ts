import { ICategory } from './category.type';

export interface ISubCategoryProps {
  id: string;
  name: string;
  categoryId: string;
  updatedAt: Date;
  createdAt: Date;
}

export interface ISubCategory extends ISubCategoryProps {
  category: ICategory;
}
