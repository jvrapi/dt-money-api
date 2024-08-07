export interface ICategory {
  id: string;
  name: string;
  description?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface ISaveCategory {
  id?: string;
  name: string;
  description?: string;
}
