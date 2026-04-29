import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Screening } from './screening.entity';

@Entity('movie')
export class Movie {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  running_time: number;

  @OneToMany(() => Screening, (s) => s.movie)
  screenings: Screening[];
}
