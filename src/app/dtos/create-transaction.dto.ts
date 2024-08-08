import { IsEnum, IsNumber, IsPositive, IsString } from 'class-validator';

import { TransactionType } from '@/types';

export class CreateTransactionDTO {
  @IsString()
  description: string;

  @IsNumber({ maxDecimalPlaces: 2 })
  @IsPositive()
  price: number;

  @IsEnum(TransactionType)
  type: TransactionType;

  @IsString()
  subCategoryId: string;
}
