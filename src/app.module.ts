import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';
import { AccessTokenInterceptor } from '@interceptor/accesstoken.interceptor';
import { GlobalExceptionFilter } from '@filter/exception.filter';
import { AccountModule } from '@domain/account/account.module';
import { MovieModule } from '@domain/Movie/Movie.module';
import { ScreenModule } from '@domain/Screen/Screen.module';
import { ScreeningModule } from '@domain/Screening/Screening.module';
import { Reservation } from './entities/reservation.entity';
import { ReservationModule } from '@domain/Reservation/Reservation.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      cache: true,
      isGlobal: true,
    }),
    DatabaseModule,
    AccountModule,
    MovieModule,
    ScreenModule,
    ScreeningModule,
    ReservationModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_INTERCEPTOR,
      useClass: AccessTokenInterceptor,
    },
    {
      provide: APP_FILTER,
      useClass: GlobalExceptionFilter,
    },
  ],
})
export class AppModule {}
