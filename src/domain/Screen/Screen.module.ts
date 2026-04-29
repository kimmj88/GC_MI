import { Module } from '@nestjs/common';
import { ScreenController } from './Screen.controller';
import { ScreenService } from './Screen.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HttpModule } from '@nestjs/axios';
import { PassportModule } from '@nestjs/passport';

import { Screen } from 'src/entities/screen.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Screen]), HttpModule, PassportModule],
  controllers: [ScreenController],
  providers: [ScreenService],
  exports: [ScreenService],
})
export class ScreenModule {}
