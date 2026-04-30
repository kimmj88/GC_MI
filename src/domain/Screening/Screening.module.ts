import { Module } from '@nestjs/common';
import { ScreeningController } from './Screening.controller';
import { ScreeningService } from './Screening.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HttpModule } from '@nestjs/axios';
import { PassportModule } from '@nestjs/passport';
import { Screening } from 'src/entities/screening.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Screening]), HttpModule, PassportModule],
  controllers: [ScreeningController],
  providers: [ScreeningService],
  exports: [ScreeningService],
})
export class ScreeningModule {}
