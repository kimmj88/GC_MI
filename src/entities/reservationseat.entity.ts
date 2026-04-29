import { Entity, PrimaryGeneratedColumn, ManyToOne, Unique } from 'typeorm';
import { Reservation } from './reservation.entity';
import { Seat } from './seat.entity';
import { Screening } from './screening.entity';

@Entity('reservationseat')
@Unique(['screening', 'seat']) // 👉 좌석 중복 방지 핵심
export class ReservationSeat {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Reservation, (r) => r.seats)
  reservation: Reservation;

  @ManyToOne(() => Seat)
  seat: Seat;

  @ManyToOne(() => Screening)
  screening: Screening;
}
