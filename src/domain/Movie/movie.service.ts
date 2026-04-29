import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ILike, Repository } from 'typeorm';
import { MovieDto } from './movie.dto';
import { Movie } from 'src/entities/movie.entity';

@Injectable()
export class MovieService {
  @InjectRepository(Movie)
  private movieRepository: Repository<Movie>;

  async create(body: MovieDto): Promise<Movie> {
    return await this.movieRepository.save(body);
  }

  async list(body: MovieDto): Promise<Movie[]> {
    const data: Movie[] = await this.movieRepository.find({
      where: [{ title: ILike(`%${body.title}%`) }],
    });

    return data;
  }
}
