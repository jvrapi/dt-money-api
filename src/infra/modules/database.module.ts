import { Module } from "@nestjs/common";
import { PrismaService } from "../database/connection";
import { TransactionRepository } from "@/app/repositories";
import { PrismaTransactionRepository } from "../database/repositories";

@Module({
  providers: [
    {
      provide: TransactionRepository,
      useClass: PrismaTransactionRepository
    },
    PrismaService
  ],
  exports: [TransactionRepository]
})
export class DatabaseModule{}