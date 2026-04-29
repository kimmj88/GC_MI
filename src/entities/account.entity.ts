import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Reservation } from './reservation.entity';

@Entity('account')
export class Account {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column()
  name: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @OneToMany(() => Reservation, (r) => r.account)
  reservations: Reservation[];
}
