import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { Account } from 'src/entities/account.entity';
import { Movie } from 'src/entities/movie.entity';
import { Screen } from 'src/entities/screen.entity';
import { Seat } from 'src/entities/seat.entity';
import { Screening } from 'src/entities/screening.entity';
import { Reservation } from 'src/entities/reservation.entity';
import { ReservationSeat } from 'src/entities/reservationseat.entity';
@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        const type = configService.get('DATABASE_TYPE');
        return {
          type: configService.get('DATABASE_TYPE') as typeof type,
          username: configService.get('DATABASE_USERNAME'),
          password: configService.get('DATABASE_PASSWORD'),
          host: configService.get<string>('DATABASE_HOST'),
          port: configService.get<number>('DATABASE_PORT'),
          database: configService.get<string>('DATABASE_NAME'),
          entities: [
            Account,
            Movie,
            Screen,
            Seat,
            Screening,
            Reservation,
            ReservationSeat,
          ],
          synchronize: true,
          timezone: 'Z',
        };
      },
    }),
  ],
})
export class DatabaseModule {}
