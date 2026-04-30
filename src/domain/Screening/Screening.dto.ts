import { IsNumber, IsString } from 'class-validator';

export class ScreeningDto {
  @IsNumber()
  id?: number;

  @IsString()
  title?: string;

  @IsString()
  start_time?: string;

  @IsString()
  end_time?: string;
}

export class ScreeningSearchDto {
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

  @IsString()
  title: string;
}
