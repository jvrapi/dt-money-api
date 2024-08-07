import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { ListCategoriesService } from '../services/categories';

@ApiTags('categories')
@Controller('/categories')
export class CategoryController {
  constructor(private readonly listCategoriesService: ListCategoriesService) {}

  @Get()
  list() {
    return this.listCategoriesService.execute();
  }
}
