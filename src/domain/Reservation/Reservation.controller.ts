
import { Controller } from '@nestjs/common';
import { BaseController } from '@common/domain/baseController';
import { ReservationService } from './Reservation.service';
import { ReservationDto } from './Reservation.dto';
import { RESERVATION } from '@common/domain/api';

@Controller('Reservation')
export class ReservationController extends BaseController<ReservationService, ReservationDto> {
  constructor(private readonly reservationService: ReservationService) {
    super(reservationService, RESERVATION);
  }
}
