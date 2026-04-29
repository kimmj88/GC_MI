import { IsNumber, IsString } from 'class-validator';

export class MovieDto {
  @IsNumber()
  id?: number;

  @IsString()
  title?: string;
}
