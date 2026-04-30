import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Screen } from './screen.entity';
import { Screening } from './screening.entity';
import { Reservation } from './reservation.entity';

@Entity('seat')
export class Seat {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  row_name: string;

  @Column()
  seat_number: number;

  @ManyToOne(() => Screen, (s) => s.seats)
  screen: Screen;

  @OneToMany(() => Reservation, (r) => r.screening)
  reservations: Reservation[];
}
