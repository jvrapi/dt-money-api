import { ICategory } from '@/types';

export class Category {
  id: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;

  constructor(props: ICategory) {
    this.id = props.id;
    this.name = props.name;
    this.createdAt = props.createdAt;
    this.updatedAt = props.updatedAt;
  }
}
