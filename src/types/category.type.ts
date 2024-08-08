import { ISubCategory } from './sub-category.type';

export interface ICategoryProps {
  id: string;
  name: string;
  description?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface ICategory extends ICategoryProps {
  subCategories: ISubCategory[];
}

export interface ISaveCategory {
  id?: string;
  name: string;
  description?: string;
}
