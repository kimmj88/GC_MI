import { IsNumber, IsString } from 'class-validator';

export class ScreeningDto {
  @IsNumber()
  id?: number;

  @IsString()
  title?: string;
}
