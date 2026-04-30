import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ReservationDto } from './Reservation.dto';
import { Reservation } from 'src/entities/reservation.entity';

@Injectable()
export class ReservationService {
  @InjectRepository(Reservation)
  private reservationRepository: Repository<Reservation>;

  // ## 좌석 예매 ##
  async create(body: ReservationDto): Promise<Reservation> {
    return await this.reservationRepository.save({
      account: { id: body.accountId },
      screening: { id: body.screeningId },
      seat: { id: body.seatId },
    });
  }

  // ## 예매 내역 조회 ##
  async list(body: ReservationDto): Promise<Reservation[]> {
    const data: Reservation[] = await this.reservationRepository.find({
      where: { account: { id: body.accountId } },
      relations: { screening: true, seat: true },
    });

    return data;
  }
}
