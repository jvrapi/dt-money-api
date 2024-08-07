import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { LoggerModule } from 'nestjs-pino';

import {
  AppController,
  CategoryController,
  TransactionController,
} from './app/controllers';
import { ListCategoriesService } from './app/services/categories';
import { ListTransactionsService } from './app/services/transactions';
import { PinoFactory } from './config';
import { DatabaseModule } from './infra/modules';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    LoggerModule.forRootAsync({
      useFactory: PinoFactory,
    }),
    DatabaseModule,
  ],
  controllers: [AppController, CategoryController, TransactionController],
  providers: [ListTransactionsService, ListCategoriesService],
})
export class AppModule {}
