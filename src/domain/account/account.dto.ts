import { IsEmail, IsString, IsNumber, IsBoolean } from 'class-validator';

export class AccountDto {
  @IsNumber()
  id?: number;

  @IsString()
  name?: string;

  @IsEmail()
  email?: string;

  @IsString()
  password?: string;
}

export class AccountSearchDto {
  @IsString()
  value: string;

  @IsString()
  created_at: string;

  @IsString()
  sort: string;

  @IsString()
  order: string;

  @IsNumber()
  rownum: number;

  @IsNumber()
  page: number;
}
