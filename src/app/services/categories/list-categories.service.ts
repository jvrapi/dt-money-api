import { Injectable, Logger } from '@nestjs/common';

import { CategoryRepository } from '@/app/repositories';

@Injectable()
export class ListCategoriesService {
  private logger = new Logger(ListCategoriesService.name);
  constructor(private readonly categoryRepository: CategoryRepository) {}

  async execute() {
    try {
      return await this.categoryRepository.findAll();
    } catch (error) {
      this.logger.error(error.message);
      throw error;
    }
  }
}
