import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Account } from './account.entity';
import { Screening } from './screening.entity';
import { ReservationSeat } from './reservationseat.entity';

@Entity('reservation')
export class Reservation {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Account, (a) => a.reservations)
  account: Account;

  @ManyToOne(() => Screening, (s) => s.reservations)
  screening: Screening;

  @Column({ default: 'BOOKED' })
  status: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  reserved_at: Date;

  @OneToMany(() => ReservationSeat, (rs) => rs.reservation)
  seats: ReservationSeat[];
}
