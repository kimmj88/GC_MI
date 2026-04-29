import { IsNumber, IsString } from 'class-validator';

export class ScreenDto {
  @IsNumber()
  id?: number;
}
