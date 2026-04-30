import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
  Unique,
} from 'typeorm';
import { Account } from './account.entity';
import { Screening } from './screening.entity';
import { Seat } from './seat.entity';

@Entity('reservation')
@Unique('UQ_RESERVATION_SCREENING_SEAT', ['screening', 'seat'])
export class Reservation {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Account, (a) => a.reservations)
  account: Account;

  @ManyToOne(() => Screening, (s) => s.reservations)
  screening: Screening;

  @ManyToOne(() => Seat, (r) => r.reservations)
  seat: Seat;

  @Column({ default: 'BOOKED' })
  status: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  reserved_at: Date;
}
