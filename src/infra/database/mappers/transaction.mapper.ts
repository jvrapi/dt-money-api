import { Transaction } from "@/app/entities";
import { TransactionType } from "@/types";
import {Transaction as Raw} from '@prisma/client'

export class TransactionMapper {
  static toApp(raw: Raw): Transaction{
    return new Transaction({
      ...raw,
      price: Number(raw.price),
      type: raw.type as TransactionType
    })
  }
}