import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Screen } from './screen.entity';

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
}
