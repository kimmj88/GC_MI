// src/users/dto/create-user.dto.ts
import { IsEmail, IsString, IsNumber, IsBoolean } from 'class-validator';

export class AccountDto {
  @IsNumber()
  id?: number;

  @IsString()
  name?: string;

  @IsEmail()
  email?: string;

  @IsNumber()
  systemrole_id: number;

  @IsString()
  provider?: string;

  @IsBoolean()
  is_deleted?: boolean;
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
