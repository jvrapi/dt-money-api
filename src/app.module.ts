import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { LoggerModule } from 'nestjs-pino';

import { AppController, TransactionController } from './app/controllers';
import { ListTransactionsService } from './app/services';
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
  controllers: [AppController, TransactionController],
  providers: [ListTransactionsService],
})
export class AppModule {}
