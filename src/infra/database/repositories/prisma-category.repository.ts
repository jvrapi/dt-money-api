import { Injectable } from '@nestjs/common';

import { Category } from '@/app/entities';
import { CategoryRepository } from '@/app/repositories';
import { ISaveCategory } from '@/types';

import { PrismaService } from '../connection';
import { CategoryMapper } from '../mappers';

@Injectable()
export class PrismaCategoryRepository implements CategoryRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async findAll(): Promise<Category[]> {
    const categories = await this.prismaService.category.findMany({
      include: {
        subCategories: true,
      },
    });

    return categories.map(CategoryMapper.toApp);
  }

  async findById(id: string): Promise<Category | undefined> {
    const category = await this.prismaService.category.findUnique({
      where: { id },
    });

    if (!category) {
      return null;
    }

    return CategoryMapper.toApp(category);
  }

  async save(data: ISaveCategory): Promise<Category> {
    const category = await this.prismaService.category.upsert({
      where: { id: data.id },
      update: data,
      create: data,
    });

    return CategoryMapper.toApp(category);
  }

  async delete(id: string): Promise<void> {
    await this.prismaService.category.delete({ where: { id } });
  }
}
