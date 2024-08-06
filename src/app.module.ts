import { Module } from '@nestjs/common';
import { DatabaseModule } from './infra/modules';
import { ListTransactionsService } from './app/services';
import { TransactionController } from './app/controllers';
import { LoggerModule } from 'nestjs-pino';
import { PinoFactory } from './config';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    LoggerModule.forRootAsync({
      useFactory: PinoFactory
    }),
    DatabaseModule
  ],
  controllers: [TransactionController],
  providers: [ListTransactionsService],
})
export class AppModule { }
