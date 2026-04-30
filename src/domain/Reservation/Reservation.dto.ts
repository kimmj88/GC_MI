import { IsNumber, IsString } from 'class-validator';

export class ReservationDto {
  @IsNumber()
  id?: number;

  @IsNumber()
  accountId?: number;

  @IsNumber()
  screeningId?: number;

  @IsNumber()
  seatId?: number;
}
