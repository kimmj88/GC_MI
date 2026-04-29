import { Module } from '@nestjs/common';
import { MovieController } from './movie.controller';
import { MovieService } from './movie.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HttpModule } from '@nestjs/axios';
import { PassportModule } from '@nestjs/passport';
import { Movie } from 'src/entities/movie.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Movie]), HttpModule, PassportModule],
  controllers: [MovieController],
  providers: [MovieService],
  exports: [MovieService],
})
export class MovieModule {}
