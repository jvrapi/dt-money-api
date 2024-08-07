import { Controller, Get } from "@nestjs/common";
import { ListTransactionsService } from "../services";
import { ApiOkResponse, ApiTags } from "@nestjs/swagger";
import { Transaction } from "../entities";

@ApiTags('transactions')
@Controller('transactions')
export class TransactionController {

  constructor(private readonly listTransactionService: ListTransactionsService){}

  @ApiOkResponse({
    type: Transaction,
    isArray: true
  })
  @Get()
  async listAllTransactions(){
    return await this.listTransactionService.execute()
  }
}