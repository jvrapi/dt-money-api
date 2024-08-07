import { ISaveCategory } from '@/types';

import { Category } from '../entities';

export abstract class CategoryRepository {
  abstract findAll(): Promise<Category[]>;
  abstract findById(id: string): Promise<Category | undefined>;
  abstract save(category: ISaveCategory): Promise<Category>;
  abstract delete(id: string): Promise<void>;
}
