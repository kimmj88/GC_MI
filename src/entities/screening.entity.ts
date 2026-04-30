import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Movie } from './movie.entity';
import { Screen } from './screen.entity';
import { Reservation } from './reservation.entity';
import { Seat } from './seat.entity';

@Entity('screening')
export class Screening {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Movie, (m) => m.screenings)
  movie: Movie;

  @ManyToOne(() => Screen, (s) => s.screenings)
  screen: Screen;

  @Column()
  start_time: Date;

  @Column()
  end_time: Date;

  @OneToMany(() => Reservation, (r) => r.screening)
  reservations: Reservation[];
}
