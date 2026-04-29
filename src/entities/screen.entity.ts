import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from 'typeorm';

import { Seat } from './seat.entity';
import { Screening } from './screening.entity';

@Entity('screen')
export class Screen {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => Seat, (s) => s.screen)
  seats: Seat[];

  @OneToMany(() => Screening, (s) => s.screen)
  screenings: Screening[];
}
