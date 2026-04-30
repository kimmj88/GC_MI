import { Module } from '@nestjs/common';
import { ReservationController } from './Reservation.controller';
import { ReservationService } from './Reservation.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HttpModule } from '@nestjs/axios';
import { PassportModule } from '@nestjs/passport';
import { Reservation } from 'src/entities/reservation.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Reservation]),
    HttpModule,
    PassportModule,
  ],
  controllers: [ReservationController],
  providers: [ReservationService],
  exports: [ReservationService],
})
export class ReservationModule {}
